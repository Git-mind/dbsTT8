import sys
from flask import Flask, request, jsonify
from models.db_models import User
from utils.dbConfig import db
from models.db_models import ScheduledTransaction

# Insert transactions created from frontend into Transaction table [4]
# http://127.0.0.1:5000/transaction/create_transaction?username=user101

def txn_detail():

    TransactionID = request.json.get("TransactionID", None)
    AccountID = request.json.get("AccountID", None)
    txn_detail = ScheduledTransaction.query.filter_by(TransactionID=TransactionID, AccountID=AccountID).first()

    if txn_detail:
        return jsonify(
            {
                "code": 200,
                "data": txn_detail.json()
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "Transaction not found."
        }
    ), 404
