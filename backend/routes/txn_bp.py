from flask import Blueprint
from controllers.TxnController import txn_detail
from controllers.TxnController import delete_txn


txn_bp = Blueprint('txn_bp', __name__)
txn_bp.route('/txn_detail', strict_slashes=False, methods=['GET'])(txn_detail)
txn_bp.route('/delete_txn', strict_slashes=False, methods=['DELETE'])(delete_txn)
