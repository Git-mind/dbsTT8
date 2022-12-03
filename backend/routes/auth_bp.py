from flask import Blueprint
from controllers.AuthController import login

auth_bp = Blueprint('auth_bp', __name__)
# auth_bp.route('/', strict_slashes=False, methods=['GET'])(get_users)
auth_bp.route('/login', strict_slashes=False, methods=['POST'])(login)
# auth_bp.route('/<string:username>', strict_slashes=False, methods=['GET'])(find_by_username)
# auth_bp.route('/<int:user_id>/edit', strict_slashes=False, methods=['POST'])(update)
# auth_bp.route('/delete/<string:username>', strict_slashes=False, methods=['DELETE'])(delete_user)
