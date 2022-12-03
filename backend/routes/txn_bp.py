from flask import Blueprint
from controllers.TxnController import txn_detail

txn_bp = Blueprint('txn_bp', __name__)
txn_bp.route('/txn_detail', strict_slashes=False, methods=['GET'])(txn_detail)