import sys
from flask import Flask, request, jsonify
from models.db_models import User
from utils.dbConfig import db

# jwt 
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
def login():
    '''
        Example of response received in front end
        {
            "code":200,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTQ2Njg4MCwianRpIjoiOTdiYTM5YzEtOWM1Ni00YzkyLWExNmUtOWI3MThmNWQxMzRmIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjY5NDY2ODgwLCJleHAiOjE2Njk3MjYwODAsImlkIjoxLCJuYW1lIjoiSmFja3kiLCJ1c2VybmFtZSI6InVzZXIxMDEifQ.LBmzSv7LHiby2plop9ufQEolGPmCIabz8W_eFVel6nU"
        }
        Example of decoded token 
        {
            "fresh": false,
            "iat": 1669466880,
            "jti": "97ba39c1-9c56-4c92-a16e-9b718f5d134f",
            "type": "access",
            "sub": 1,
            "nbf": 1669466880,
            "exp": 1669726080,
            "id": 1,
            "name": "Jacky",
            "username": "user101"
        }
    '''
    Username = request.json.get("Username", None)
    Password = request.json.get("Password", None)
    # compare with data from database
    # get user by id
    # user = User.query.get(5)
    user = User.query.filter_by(Username=Username).first()
    print(user)
    if user:
        if Username != user.Username or Password != user.Password:
            return jsonify({
                "code": 401,
                "message": "Incorrect username or password"
        }), 401
        additional_claims = {"user_id": user.UserID, "Username": user.Username}
        access_token = create_access_token(identity=Username, additional_claims=additional_claims)
        return jsonify(
            {
                "code": 200,
                "token": access_token
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "User not found."
        }
    ), 404
