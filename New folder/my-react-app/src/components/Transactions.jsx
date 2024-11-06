import React from "react";
import "../assets/css/tr.css";
import dollar from "../assets/images/dollar.png"

function Transactions(){
    return (
      <div className="transactions-container">
        <div className="single-transaction">
          <img src={dollar} alt="transaction image" />
          <div className="transaction-contents">
          <div className="ab">
            <h3>Recipient</h3>
            <p>Type of payment </p>
          </div>
          <div className="price">+$100</div>
          </div>
          
        </div>
      </div>
    );
}

export default Transactions;