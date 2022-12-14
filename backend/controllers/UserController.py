import sys
from flask import Flask, request, jsonify
from models.db_models import User
from utils.dbConfig import db

# class User(db.Model):
#     __tablename__ = 'User'

#     UserID = Column(Integer, primary_key=True)
#     Username = Column(String(20))
#     Password = Column(String(20))
#     Firstname = Column(String(255))
#     Lastname = Column(String(255))
#     Email = Column(String(255))
#     Address = Column(String(255))
#     OptIntoPhyStatements = Column(BIT(1))

#     def json(self):
#         return {"UserID": self.UserID, "Username": self.Username, "Password": self.Password, "Firstname": self.Firstname, "Lastname": self.Lastname, "Email": self.Email, "Address": self.Address, "OptIntoPhyStatements": self.OptIntoPhyStatements, }



def getUserDetails(user_id):
    # if request.is_json:
    # data = request.get_json()
    # user_id = data["user_id"]
    try:
        userDetails = User.query.filter_by(UserID=user_id).first()
        if userDetails:
            return jsonify(
                {
                    "code": 200,
                    "data": userDetails.jsonWithoutCredentials()
                }
            ), 200

        return jsonify(
            {
            "code": 404,
            "data": "User not found."
            }
        ), 404

    except Exception as e:
        return jsonify(
            {
                "code": 500,
                "data": "Server error"
            }
        ), 500

# return jsonify(
#     {
#         "code": 400,
#         "data": "Invalid input type. Please input in JSON format."
#     }
# ), 400


def updateUserDetails():
    if request.is_json:
        data = request.get_json()
        user_id = data["UserID"]
        newFirstname = data["Firstname"]
        newLastname = data["Lastname"]
        newEmail = data["Email"]
        newAddress = data["Address"]
        newOptIntoPhyStatements = data["OptIntoPhyStatements"]

        try:
            user = User.query.filter_by(UserID=user_id).first()
            if user:
                user.Firstname = newFirstname
                user.Lastname = newLastname
                user.Email= newEmail
                user.Address = newAddress
                user.OptIntoPhyStatements = newOptIntoPhyStatements
                db.session.commit()
                return jsonify(
                    {
                        "code": 200,
                        "message": f'Successfully updated User {user_id}'
                    }
                ), 200
            return jsonify(
                {
                    "code": 404,
                    "data": "User not found."
                }
            )
        except Exception as error:
            return jsonify(
                {
                    "code": 500,
                    "message": "Error updating user"
                }
            ), 500
    else:
        return jsonify(
            {
                "code": 400,
                "data": str(data),
                "message": "Invalid input type. pls input as json"
            }
        ), 400

