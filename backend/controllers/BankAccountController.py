import sys
from flask import Flask, request, jsonify
from models.db_models import User, BankAccount
from utils.dbConfig import db

# class BankAccount(db.Model):
#     __tablename__ = 'BankAccount'

#     AccountID = Column(Integer, primary_key=True, nullable=False)
#     UserID = Column(Integer, primary_key=True, nullable=False)
#     AccountType = Column(String(255))
#     AccountBalance = Column(Numeric(10, 2))

def getAccInfo():
    if request.is_json:
        data = request.get_json()
        user_id = data["user_id"]
        try:
            bankAccs = BankAccount.query.filter_by(UserID=user_id).all()
            if len(bankAccs) == 0:
                return jsonify(
                    {
                        "code": 404,
                        "data": "User has no existing account(s) opened."
                    }
                ), 404
            # print(bankAccs) #type list
            return jsonify(
                {
                "code": 200,
                "data": [bankAcc.jsonBankAccounts() for bankAcc in bankAccs]
                }
            ), 200

        except Exception as e:
            return jsonify(
                {
                    "code": 500,
                    "data": "Server error"
                }
            ), 500
    
    return jsonify(
        {
            "code": 400,
            "data": "Invalid input type. Please input in JSON format."
        }
    ), 400


