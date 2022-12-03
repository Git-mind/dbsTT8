import {FaTimes} from 'react-icons/fa'

const Transaction = ({transaction, onDelete, onToggle}) => {
  return (
    // <div className={`transaction ${transaction.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(transaction.id)}>
    <div className="transaction">
        <h3>{transaction.text} <FaTimes style={{color: 'red',cursor:'pointer'}} onClick={() => onDelete(transaction.id)} /></h3>
        <p>{transaction.day}</p>
        <p align="right">{transaction.amount}</p>
    </div>
  )
}

export default Transaction