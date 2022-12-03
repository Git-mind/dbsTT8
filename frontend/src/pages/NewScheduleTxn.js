import React, { useState } from "react";
import "../App.css";
import "../Custom.css";
import axios from "axios";

const NewScheduleTxn = () => {
  const [accountid, setAccountId] = useState("");
  const [receivingaccountid, setReceivingAccountId] = useState("");
  const [date, setDate] = useState("");
  const [transactionamount, setTransactionAmount] = useState("");
  const [comment, setComment] = useState("");

  const onChangeAccountId = (e) => {
    const accountid = e.target.value;
    setAccountId(accountid);
  };

  const onChangeReceivingAccountId = (e) => {
    const receivingaccountid = e.target.value;
    setReceivingAccountId(receivingaccountid);
  };

  const onChangeDate = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const onChangeTransactionAmount = (e) => {
    const transactionamount = e.target.value;
    setTransactionAmount(transactionamount);
  };

  const onChangeComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  const handleSubmit = () => {
    const dateiso = new Date(date);
    const iso = dateiso.toISOString();
    axios.post("http://localhost:5000/transaction/txn_insert", {
      AccountID: accountid,
      ReceivingAccountID: receivingaccountid,
      Date: iso,
      TransactionAmount: transactionamount,
      Comment: comment,
      Transacted: "F",
    });
    console.log(iso);
  };

  return (
    <>
      <header className="headertxn">
        <h1>New Scheduled Transactions</h1>
      </header>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="accountid"
            placeholder="Account ID"
            value={accountid}
            onChange={onChangeAccountId}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="receivingaccountid"
            placeholder="Receiving Account ID"
            value={receivingaccountid}
            onChange={onChangeReceivingAccountId}
          />
        </div>

        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="date"
            placeholder="Date"
            value={date}
            onChange={onChangeDate}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="transactionamount"
            placeholder="Transaction Amount"
            value={transactionamount}
            onChange={onChangeTransactionAmount}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={onChangeComment}
          />
        </div>

        <div className="mb-3 d-grid">
          <button className="btn btn-primary" type="submit">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default NewScheduleTxn;
