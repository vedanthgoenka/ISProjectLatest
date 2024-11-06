// import React, { useState } from "react";
// import Sidenav from "./sidenav";
// import AccountCard from "./AccountCard";
// import CreditCard from "./CreditCard";
// import "../assets/css/accounts.css";
// import man from "../assets/images/man.png";
// import Transactions from "./Transactions";
// import { useLocation } from "react-router-dom";

// function Dashboard() {
//   const [activeTab, setActiveTab] = useState("Dashboard"); // Set initial active tab
//   const location = useLocation();
//   const user = location.state;

//   return (
//     <div className="dashboard-main-container">
//       <div className="dashboard-sidenav">
//         <Sidenav activeTab={activeTab} onTabClick={setActiveTab} />{" "}
//         {/* Pass activeTab and setActiveTab */}
//       </div>
//       <div className="dashboard-top-container">
//         <h1 className="dashboard-title">Dashboard</h1>
//         <div className="dashboard-inner-container">
//           <img className="dashboard-profile-img" src={man} alt="profile" />
//           <p className="dashboard-username">{user.name}</p>
//         </div>
//       </div>
//       <div className="dashboard-accounts-section">
//         <h2 className="dashboard-section-title">My Accounts</h2>
//         <div className="dashboard-accounts">
//           <AccountCard accountNumber={user.accountNumber} />
//           <AccountCard accountNumber={user.accountNumber} />
//           <AccountCard accountNumber={user.accountNumber} />
//         </div>
//       </div>
//       <div className="dashboard-cards-section">
//         <h2 className="dashboard-section-title">My Cards</h2>
//         <div className="dashboard-card-box">
//           <CreditCard />
//           <CreditCard />
//           <CreditCard />
//         </div>
//       </div>
//       <div className="dashboard-transactions-section">
//         <h2 className="dashboard-section-title">Transactions</h2>
//         <Transactions />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidenav from "./sidenav";
import AccountCard from "./AccountCard";
import CreditCard from "./CreditCard";
import "../assets/css/accounts.css";
import man from "../assets/images/man.png";
import Transactions from "./Transactions";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard"); // Set initial active tab
  const [name, setName] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setAccountNumber(localStorage.getItem("accountNumber"));
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false"); // Set isLoggedIn to false
    navigate("/"); // Navigate back to the login page
  };

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-sidenav">
        <Sidenav activeTab={activeTab} onTabClick={setActiveTab} />{" "}
        {/* Pass activeTab and setActiveTab */}
      </div>
      <div className="dashboard-top-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-inner-container">
          <img className="dashboard-profile-img" src={man} alt="profile" />
          <p className="dashboard-username">{name}</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>{" "}
        {/* Logout Button */}
      </div>
      <div className="dashboard-accounts-section">
        <h2 className="dashboard-section-title">My Accounts</h2>
        <div className="dashboard-accounts">
          <AccountCard accountNumber={accountNumber} />
          <AccountCard accountNumber={accountNumber} />
          <AccountCard accountNumber={accountNumber} />
        </div>
      </div>
      <div className="dashboard-cards-section">
        <h2 className="dashboard-section-title">My Cards</h2>
        <div className="dashboard-card-box">
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </div>
      </div>
      <div className="dashboard-transactions-section">
        <h2 className="dashboard-section-title">Transactions</h2>
        <Transactions />
      </div>
    </div>
  );
}

export default Dashboard;
