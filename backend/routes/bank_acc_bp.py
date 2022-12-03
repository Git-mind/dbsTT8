from flask import Blueprint
from controllers.BankAccountController import getAccInfo


bank_acc_bp = Blueprint('bank_acc_bp', __name__)

bank_acc_bp.route('/getAccountInfo/<int:user_id>', strict_slashes=False, methods=['GET'])(getAccInfo)