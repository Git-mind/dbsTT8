import sys
from flask import Flask, request, jsonify
from models.db_models import User
from utils.dbConfig import db

def getUserDetails():
    