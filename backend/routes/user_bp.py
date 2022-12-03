from flask import Blueprint
from controllers.UserController import getUserDetails

user_bp = Blueprint('user_bp', __name__)
user_bp.route('/userDetails', strict_slashes=False, methods=['GET'])(getUserDetails)