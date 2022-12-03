import React, {useState} from "react";
// import axios from "axios";
// import hosturl from "../hosturl.js"
import { FaTimes } from 'react-icons/fa'

// import { pullTransactions } from "../contexts/pullTransactions.js";
const ViewTransactions = () => {
    const [transactions, setTransactions] = useState([
        {
            "id": 1,
            "AccountID": 621156213,
            "ReceivingAccountID": 339657462,
            "date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 500.00,
            "comment": "Monthly Pocket Money"
        },
        {
            "id": 2,
            "AccountID": 958945214,
            "ReceivingAccountID": 621156213,
            "date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 8996.00,
            "comment": "School Fees"
        },
        {
            "id": 3,
            "AccountID": 828120424,
            "ReceivingAccountID": 322798030,
            "date": "2022-11-25T04:00:00.000Z",
            "TransactionAmount": 3000.00,
            "comment": "Driving Centre Top-up"
        },
        {
            "id": 4,
            "AccountID": 353677039,
            "ReceivingAccountID": 785703027,
            "date": "2022-11-17T06:21:00.000Z",
            "TransactionAmount": 255.00,
            "comment": "Tuition Fee Payment"
        },
        {
            "id": 5,
            "AccountID": 259555772,
            "ReceivingAccountID": 828120424,
            "date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 32.00,
            "comment": "Books Payment"
        }
    ])
    // const accountId = 621156213;
    // const transaction = pullTransactions();
    // get request
    // async function getScheduledTransaction() {
    //     try {
    //         const response = await axios.get(hosturl + '/transaction/txn_detail');
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error.response.data);
    //     }
    // }
    // post request
    // async function createNewScheduledTransaction() {
    //     try {
    //         await axios
    //             .post(hosturl + "/transaction/create_txn", {
    //                 "AccountID": 621156213,
    //                 "ReceivingAccountID": 339657462,
    //                 "date": "2022-11-08T04:00:00.000Z",
    //                 "TransactionAmount": 500.00,
    //                 "comment": "Monthly Pocket Money"
    //             })
    //             .then((response) => {
    //                 console.log(response.data);
    //             });

    //     } catch (error) {
    //         console.log(error.response.data);
    //     }
    // }

    // delete
    // async function deleteScheduledTransaction() {
    //     try {
    //         await axios
    //             .delete(hosturl + "/transaction/delete_txn/<txn_name>", {})
    //             .then((response) => {
    //                 console.log(response.data);
    //             });

    //     } catch (error) {
    //         console.log(error.response.data);
    //     }
    // }

    
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id))
    }


    const Transactions = ({ transactions, onDelete, onToggle }) => {
        return (
            <>
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </>
        )
    }


    const Transaction = ({ transaction, onDelete, onToggle }) => {
        const displayDate = transaction.date.split('T')[0]
        return (
            <div className="transaction">
                <h3>{transaction.AccountID} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(transaction.id)} /></h3>
                <h5>{transaction.comment}</h5>
                <p>{displayDate}</p>
                <h4 align="right">${transaction.TransactionAmount}</h4>
            </div>
        )
    }
    


    return (
        <>
            <div className="container">
                {/* <Header /> */}
                <header className='header'>
                    <h1>Scheduled Transactions</h1>
                </header>
                {transactions.length > 0 ? (
                    // <Transactions transactions={transactions} onDelete={deleteTransaction} onToggle={toggleReminder}/>) : (
                    <Transactions transactions={transactions} onDelete={deleteTransaction} />) : (
                    'No Transactions to Show'
                )}
                <button type="button" align="right">Add New Transaction</button>
            </div>
        </>

    );
};

export default ViewTransactions;
