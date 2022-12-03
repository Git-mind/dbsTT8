import sys
from flask import Flask, request, jsonify
from models.db_models import User
from utils.dbConfig import db
from models.db_models import ScheduledTransaction
# Insert transactions created from frontend into Transaction table [4]
# http://127.0.0.1:5000/transaction/create_transaction?username=user101

def txn_detail():

    AccountID = request.json.get("AccountID", None)
    txn_detail = ScheduledTransaction.query.filter_by(AccountID=AccountID).all()
    txn_detail.extend(ScheduledTransaction.query.filter_by(ReceivingAccountID=AccountID).all())
    print(txn_detail)
    if len(txn_detail):
        return jsonify(
            {
                "code": 200,
                "data": [detail.json() for detail in txn_detail]
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "Transaction not found."
        }
    ), 404

def delete_txn():
    
    TransactionID = request.json.get("TransactionID", None)
    AccountID = request.json.get("AccountID", None)
    txn_detail = ScheduledTransaction.query.filter_by(TransactionID=TransactionID, AccountID=AccountID).first()
    print(txn_detail)
    if txn_detail:
        db.session.delete(txn_detail)
        db.session.commit()
        return jsonify(
            {
                "code": 200,
                "data": {   
                    "transaction": "Transaction deleted"
                }
            }
        )

    return jsonify(
        {
            "code": 404,
            "data": {
                "transaction": TransactionID
            },
            "message": "Transaction ID not found."
        }
    ), 201

def txn_insert():
    if request.is_json:
        data = request.get_json()
        try:
            newTransaction = ScheduledTransaction(**data)
            db.session.add(newTransaction)
            db.session.commit()
        except Exception as e:
            print (e)
            return jsonify(
                {
                    "code": 500,
                    "data": "server error"
                }
            )
    return "Success"