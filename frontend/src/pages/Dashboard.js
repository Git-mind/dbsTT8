import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AuthService from "../services/auth.service";
// import DbsLogo from "../assets/DBS-Bank-logo.png";
// import { useAuth } from "../contexts/authContext";
import axios from "axios";

const Dashboard = () => {
  // var test = [
  //   {
  //     AccountID: 621156213,
  //     UserID: 1,
  //     AccountType: "Saving",
  //     AcccountBalance: 70200.71,
  //   },
  //   {
  //     AccountID: 958945214,
  //     UserID: 1,
  //     AccountType: "Current",
  //     AcccountBalance: 99720.46,
  //   },
  //   {
  //     AccountID: 339657462,
  //     UserID: 1,
  //     AccountType: "Current",
  //     AcccountBalance: 47380.33,
  //   },
  // ];
  var test = []
  // get request
  async function getAccountInfo(){
    try {
        const response = await axios.get("http://127.0.0.1:5000/bank_acc/getAccountInfo/1");
        console.log(response.data);
        test = response.data
      } catch (error) {
        console.error(error.response.data);
      }
}

  return (
    <>
    <button  type="button" class="btn btn-primary" onClick={getAccountInfo}>getAccountInfo</button>
      <div>
        <button type="button" class="btn btn-primary">
          View profile
        </button>
        <div class="row">
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <h2 class="card-title">Account</h2>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <h2 class="card-title">Balance</h2>
              </div>
            </div>
          </div>
        </div>
        {test.map((data, key) => {
          return (
            <div class="row">
              <div class="col-sm-6">
                <div class="card border-0">
                  <div class="card-body">
                    <h5 class="card-title">{data.AccountType}</h5>
                    <p class="card-text">{data.AccountID}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card border-0">
                  <div class="card-body">
                    <h5 class="card-title">{data.AcccountBalance}</h5>
                    <a href="#" class="btn btn-primary">
                      View Scheduled Transactions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
