import os
# from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
from flask_cors import CORS
from utils.dbConfig import db

# from routes.user_bp import user_bp
# from routes.wallet_bp import wallet_bp
# from routes.exchangeRate_bp import exchangeRate_bp
# from routes.transaction_bp import transaction_bp
from routes.auth_bp import auth_bp
from routes.bank_acc_bp import bank_acc_bp
from routes.txn_bp import txn_bp
from routes.user_bp import user_bp

from flask_jwt_extended import JWTManager
from models.db_models import (
    ScheduledTransaction,
    BankAccount
)
from datetime import datetime

# load_dotenv()

application = app = Flask(__name__)
application.config.from_object('config')
jwt = JWTManager(application)

CORS(application)


db.init_app(application)

# Elastic beanstalk health check
@application.route('/', methods=["GET"])
def healthCheck():
    update_balance()
    return "Healthy",200

def update_balance():
    notUpdated = ScheduledTransaction.query.filter_by(Transacted="F").all()
    '''
    {
        'TransactionID': 1,
        'AccountID': 621156213,
        'ReceivingAccountID': 339657462,
        'Date': '2022-11-08T04:00:00.000Z',
        'TransactionAmount': Decimal('500.00'),
        'Comment': 'Monthly Pocket Money',
        'Transaction': 'F'
    }
    
    2022-11-08 04:00:00+00:00
    2022-11-08 04:00:00+00:00
    2022-11-25 04:00:00+00:00
    2022-11-17 06:21:00+00:00
    2022-12-08 04:00:00+00:00
    2022-12-08 04:00:00+00:00
    2022-12-08 04:00:00+00:00
    '''
    for txn_obj in notUpdated:
        txn = txn_obj.json()
        DT = txn['Date']
        DT = datetime.fromisoformat(DT[:-1] + '+00:00')
        DT = DT.replace(tzinfo=None)
        if DT > datetime.now():
            continue
        
        sender = txn['AccountID']
        receiver = txn['ReceivingAccountID']
        amount = txn['TransactionAmount']
        print(amount)
        
        senderAcc = BankAccount.query.filter_by(AccountID = sender).first()
        receiverAcc = BankAccount.query.filter_by(AccountID = receiver).first()
        if not senderAcc or not receiverAcc:
            continue
        senderAcc.AccountBalance -= amount
        receiverAcc.AccountBalance += amount
        txn_obj.Transacted = "T"
        db.session.commit()
    print("FINISH UPDATED")

# application.register_blueprint(user_bp, url_prefix='/user')
# application.register_blueprint(wallet_bp, url_prefix='/wallet')
# application.register_blueprint(exchangeRate_bp, url_prefix='/exchange_rate')
# application.register_blueprint(transaction_bp, url_prefix='/transaction')
application.register_blueprint(auth_bp, url_prefix='/auth')
application.register_blueprint(bank_acc_bp, url_prefix='/bank_acc')
application.register_blueprint(txn_bp, url_prefix='/transaction')
application.register_blueprint(user_bp, url_prefix='/user')



if __name__ == '__main__':
    application.run()