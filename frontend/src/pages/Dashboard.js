import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AuthService from "../services/auth.service";
// import DbsLogo from "../assets/DBS-Bank-logo.png";
// import { useAuth } from "../contexts/authContext";
import axios from "axios";

const Dashboard = () => {
    const [acctData, setAcctData] = useState([]);

    useEffect(() => {
        getAcctData();
    }, []);

    var test = [];
    // get request
    async function getAcctData() {
        try {
            const response = await axios.get(
                "http://127.0.0.1:5000/bank_acc/getAccountInfo/1"
            );
            // console.log(response.data.data);
            setAcctData(response.data.data);
            //test = response.data.data
            // console.log(test)
        } catch (error) {
            console.error(error.response.data);
        }
    }
    //console.log(test);

    return (
        <>
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
                {acctData.map((data, key) => {
                    return (
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            {data.AccountType}
                                        </h5>
                                        <p class="card-text">
                                            {data.AccountID}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card border-0">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            {data.AccountBalance}
                                        </h5>
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
