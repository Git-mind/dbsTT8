// import {
//     createContext,
//     useContext,
//     useState,
//     useEffect,
// } from "react";
// import jwt_decode from "jwt-decode";
// import React from "react";
// import axios from "axios";
// import hosturl from "../hosturl.js"
// const API_URL = hosturl + "/auth/";

// export const TransactionsContext = createContext();

// const ScheduledTransactionsProvider = (props) => {

//     const [transaction, setTransaction] = useState(null);
//     const [transactions, setTransactions] = useState(null)

//     //on startup check if user is logged in 
//     useEffect(() => {
//         let transaction = localStorage.getItem("transaction");
//         if (transaction) {
//             transaction = JSON.parse(transaction);

//             setTransaction({ info: jwt_decode(transaction.token), token: transaction.token })
//         }
//     }, []);

//     const transactions = (receivingAccId, date, amount, comment) => {
//         // return axios
//         //     .post(API_URL + "transaction/txn_detail", {
//         //         receivingAccId,
//         //         date,
//         //         amount,
//         //         comment
//         //     })
//         //     .then((response) => {
//         //         if (response.data.token) {
//         //             localStorage.setItem("transaction", JSON.stringify({ token: response.data.token }));
//         //             setTransaction({ info: jwt_decode(response.data.token), token: response.data.token })
//         //         }
//         //         return response.data;
//         //     });

//         return{
//             "339657462",
//             "2022-11-08T04:00:00.000Z",
//             "amount": 500.00,
//             "comment": "Monthly Pocket Money"
//         }
//     };

    

//     return (
//         <TransactionContext.Provider value={{ receivingAccId, date, amount, comment }}>
//             {props.children}
//         </TransactionContext.Provider>
//     );
// };

// export const pullTransactions = () => useContext(TransactionsContext);
// export default ScheduledTransactionsProvider;
