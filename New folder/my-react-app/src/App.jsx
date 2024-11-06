// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import TransferForm from './components/TransferForm';
// import TransferPage from './components/TransferPage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route
//           path="/dashboard"
//           element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route
//           path="/transfer"
//           element={isLoggedIn ? <TransferPage /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
// import TransferForm from "./components/TransferForm";
import TransferPage from "./components/TransferPage";

function App() {
  // Initialize state from localStorage or default to false
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Update localStorage whenever isLoggedIn state changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/transfer"
          element={
            isLoggedIn ? (
              <TransferPage />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
