import React, { useState } from "react";
import Sidenav from "./sidenav";
import TransferForm from "./TransferForm";
import "../assets/css/trp.css"; // Optional CSS for layout

const TransferPage = () => {
  const [activeTab, setActiveTab] = useState("Transfer");

  return (
    <div className="transfer-page-container">
      <Sidenav activeTab={activeTab} onTabClick={setActiveTab} />
      <div className="content">
        <TransferForm />
      </div>
    </div>
  );
};

export default TransferPage;
