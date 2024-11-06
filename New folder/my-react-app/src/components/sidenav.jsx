// Sidenav.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/sidenav.css";
import home from "../assets/images/home.png";
import money from "../assets/images/money.png";
import transfer from "../assets/images/transfer.png";
import setting from "../assets/images/setting.png";
import logout from "../assets/images/logout.png";

function Sidenav({ activeTab, onTabClick }) {
  const navigate = useNavigate();

  const handleTabClick = (tab, path) => {
    if (onTabClick) {
      onTabClick(tab); // Ensure `onTabClick` is called if defined
    }
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="tab">
      <h3>VAH</h3>
      <div className="ib">
        <button
          className={`tablinks ${activeTab === "Dashboard" ? "active" : ""}`}
          onClick={() => handleTabClick("Dashboard", "/dashboard")}
        >
          <span className="i">
            <img src={home} alt="home" />
          </span>
          Dashboard
        </button>
      </div>
      <div className="ib">
        <button
          className={`tablinks ${activeTab === "Transfer" ? "active" : ""}`}
          onClick={() => handleTabClick("Transfer", "/transfer")}
        >
          <span className="i">
            <img src={money} alt="transfer" />
          </span>
          Transfer
        </button>
      </div>
      <div className="ib">
        <button
          className={`tablinks ${activeTab === "Transactions" ? "active" : ""}`}
          onClick={() => handleTabClick("Transactions", "/transactions")}
        >
          <span className="i">
            <img src={transfer} alt="transactions" />
          </span>
          Transactions
        </button>
      </div>
      <div className="ib2">
        <div className="ib">
          <button
            className={`tablinks ${activeTab === "Settings" ? "active" : ""}`}
            onClick={() => handleTabClick("Settings", "/settings")}
          >
            <span className="i">
              <img src={setting} alt="setting" />
            </span>
            Settings
          </button>
        </div>
        <div className="ib">
          <button
            className={`tablinks ${activeTab === "Logout" ? "active" : ""}`}
            onClick={() => handleTabClick("Logout", "/")}
          >
            <span className="i">
              <img src={logout} alt="logout" />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
