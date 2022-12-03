import Transaction from './Transaction'

const Transactions = ({ transactions, onDelete, onToggle }) => {
    return (
        <>
            {transactions.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Transactions