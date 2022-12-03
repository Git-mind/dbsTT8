from flask import Blueprint
from controllers.UserController import getUserDetails, updateUserDetails

user_bp = Blueprint('user_bp', __name__)
user_bp.route('/getUserDetails', strict_slashes=False, methods=['GET'])(getUserDetails)
user_bp.route('/updateUserDetails', strict_slashes=False, methods=['POST'])(updateUserDetails)