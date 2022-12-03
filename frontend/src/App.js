import Header from './components/Header'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

  const addTransaction = async (transaction) => {
    const res = await fetch('http://localhost:3000/transaction', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })

    const data = await res.json()

    setTransactions([...transactions, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
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