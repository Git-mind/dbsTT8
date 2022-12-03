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
from routes.txn_bp import txn_bp

from flask_jwt_extended import JWTManager

# load_dotenv()

application = app = Flask(__name__)
application.config.from_object('config')
jwt = JWTManager(application)

CORS(application)


db.init_app(application)


@app.route("/")
def home():
    return "Hello, Flask!"

# Elastic beanstalk health check
@application.route('/', methods=["GET"])
def healthCheck(): 
    return "Healthy",200


# application.register_blueprint(user_bp, url_prefix='/user')
# application.register_blueprint(wallet_bp, url_prefix='/wallet')
# application.register_blueprint(exchangeRate_bp, url_prefix='/exchange_rate')
# application.register_blueprint(transaction_bp, url_prefix='/transaction')
application.register_blueprint(auth_bp, url_prefix='/auth')
application.register_blueprint(txn_bp, url_prefix='/transaction')



if __name__ == '__main__':
    application.run()