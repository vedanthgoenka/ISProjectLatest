import React, { useState, useEffect } from 'react';
import "../assets/css/transfer.css";

const TransferForm = () => {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Fetch the accounts from the database
        fetch('/api/accounts') // Adjust the endpoint as per your backend setup
            .then((response) => response.json())
            .then((data) => setAccounts(data))
            .catch((error) => console.error('Error fetching accounts:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the transfer logic here, e.g., making an API call to the server
        const transferData = {
            fromAccount,
            toAccount,
            transferAmount: parseFloat(transferAmount),
        };

        fetch('/api/transfers', { // Adjust the endpoint as per your backend setup
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transferData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Transfer successful!');
                    // Optionally reset form fields
                    setFromAccount('');
                    setToAccount('');
                    setTransferAmount('');
                } else {
                    alert('Transfer failed. Please try again.');
                }
            })
            .catch((error) => console.error('Error during transfer:', error));
    };

    return (
        <div className="transfer-form-container">
            <h2 className="transfer-form-title">Transfer Funds</h2>
            <form onSubmit={handleSubmit} className="transfer-form">
                <div className="form-group">
                    <label htmlFor="fromAccount" className="form-label">From Account:</label>
                    <select
                        id="fromAccount"
                        className="form-select"
                        value={fromAccount}
                        onChange={(e) => setFromAccount(e.target.value)}
                    >
                        <option value="">Select Account</option>
                        {accounts.map((account) => (
                            <option key={account.AccountNumber} value={account.AccountNumber}>
                                {account.AccountType} - {account.AccountNumber}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="toAccount" className="form-label">To Account:</label>
                    <select
                        id="toAccount"
                        className="form-select"
                        value={toAccount}
                        onChange={(e) => setToAccount(e.target.value)}
                    >
                        <option value="">Select Account</option>
                        {accounts.map((account) => (
                            <option key={account.AccountNumber} value={account.AccountNumber}>
                                {account.AccountType} - {account.AccountNumber}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="transferAmount" className="form-label">Transfer Amount:</label>
                    <input
                        type="number"
                        id="transferAmount"
                        className="form-input"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="form-button">Transfer</button>
            </form>
        </div>
    );
};

export default TransferForm;
