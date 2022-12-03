import Header from './components/Header'
import Transactions from './components/Transactions'
import { useState } from 'react'

const App = () => {
  const [transactions, setTransactions] = useState([
    {
        id: 1,
        text: 'Transaction 1',
        day: '2022-01-10 3pm',
        amount: '$50.00',
        reminder: false,
    },
    {
        id: 2,
        text: 'Transaction 2',
        day: '2022-01-10 3pm',
        amount: '$100.00',
        reminder: false,
    },
    {
        id: 3,
        text: 'Transaction 3',
        day: '2022-01-10 3pm',
        amount: '$70.00',
        reminder: false,
    },
])

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  // const toggleReminder = (id) => {
  //   setTransactions(transactions.map((transaction) => transaction.id === id?{...transaction, reminder:!transaction.reminder}:transaction))
  // }

  return (
    <div className='container'>
      <Header />
      {transactions.length > 0 ? (
        // <Transactions transactions={transactions} onDelete={deleteTransaction} onToggle={toggleReminder}/>) : (
        <Transactions transactions={transactions} onDelete={deleteTransaction} />) : (
          'No Transactions to Show'
          )}
    </div>
  );
}

export default App;