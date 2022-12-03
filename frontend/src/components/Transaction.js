import { FaTimes } from 'react-icons/fa'

const Transaction = ({ transaction, onDelete, onToggle }) => {
    const displayDate = transaction.date.split('T')[0]
    return (
        <div className={`transaction ${transaction.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(transaction.id)}>
            <h3>{transaction.AccountID} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(transaction.id)} /></h3>
            <h5>{transaction.comment}</h5>
            <p>{displayDate}</p>
        </div>
    )
}

export default Transaction