// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../assets/css/login.css";

// const Login = ({ setIsLoggedIn }) => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
//   const [name, setName] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       // Handle login
//       if (accountNumber && password) {
//         try {
//           const response = await axios.post("http://localhost:5000/login", {
//             accountNumber,
//             password,
//           });

//           if (response.data.success) {
//             setIsLoggedIn(true);
//             navigate("/dashboard", { state: response.data.user });
//           } else {
//             alert(response.data.message || "Login failed.");
//           }
//         } catch (error) {
//           alert("An error occurred during login.");
//         }
//       } else {
//         alert("Please enter your account number and password.");
//       }
//     } else {
//       // Handle registration
//       if (name && accountNumber && password) {
//         try {
//           const response = await axios.post("http://localhost:5000/register", {
//             name,
//             accountNumber,
//             password,
//           });

//           if (response.data.success) {
//             alert("Registration successful! You can now log in.");
//             setIsLogin(true); // Switch to login form
//           } else {
//             alert(response.data.message || "Registration failed.");
//           }
//         } catch (error) {
//           alert("An error occurred during registration.");
//         }
//       } else {
//         alert("Please fill out all fields.");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left-panel">
//         <h1 className="login-title">Personal finance, made simple.</h1>
//         <p className="login-description">
//           All your accounts, cards, savings, and investments in one place.
//         </p>
//       </div>
//       <div className="login-right-panel">
//         <h2 className="login-heading">
//           {isLogin
//             ? "VAH! Online Banking Login"
//             : "VAH! Online Banking Register"}
//         </h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <label className="login-label">
//               Name
//               <input
//                 className="login-input"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </label>
//           )}
//           <label className="login-label">
//             Account number
//             <input
//               className="login-input"
//               type="text"
//               value={accountNumber}
//               onChange={(e) => setAccountNumber(e.target.value)}
//               required
//             />
//           </label>
//           <label className="login-label">
//             Password
//             <input
//               className="login-input"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <button className="login-button" type="submit">
//             {isLogin ? "Log in" : "Register"}
//           </button>
//           {isLogin ? (
//             <p className="toggle-text">
//               Don&apos;t have an account?{" "}
//               <span className="toggle-link" onClick={() => setIsLogin(false)}>
//                 Sign up
//               </span>
//             </p>
//           ) : (
//             <p className="toggle-text">
//               Already have an account?{" "}
//               <span className="toggle-link" onClick={() => setIsLogin(true)}>
//                 Log in
//               </span>
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/login.css";

const Login = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login
      if (accountNumber && password) {
        try {
          const response = await axios.post("http://localhost:5000/login", {
            accountNumber,
            password,
          });

          if (response.data.success) {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true"); // Store login status in localStorage
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem(
              "accountNumber",
              response.data.user.accountNumber
            );
            navigate("/dashboard");
          } else {
            alert(response.data.message || "Login failed.");
          }
        } catch (error) {
          alert("An error occurred during login.");
        }
      } else {
        alert("Please enter your account number and password.");
      }
    } else {
      // Handle registration
      if (name && accountNumber && password) {
        try {
          const response = await axios.post("http://localhost:5000/register", {
            name,
            accountNumber,
            password,
          });

          if (response.data.success) {
            alert("Registration successful! You can now log in.");
            setIsLogin(true); // Switch to login form
          } else {
            alert(response.data.message || "Registration failed.");
          }
        } catch (error) {
          alert("An error occurred during registration.");
        }
      } else {
        alert("Please fill out all fields.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <h1 className="login-title">Personal finance, made simple.</h1>
        <p className="login-description">
          All your accounts, cards, savings, and investments in one place.
        </p>
      </div>
      <div className="login-right-panel">
        <h2 className="login-heading">
          {isLogin
            ? "VAH! Online Banking Login"
            : "VAH! Online Banking Register"}
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <label className="login-label">
              Name
              <input
                className="login-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          )}
          <label className="login-label">
            Account number
            <input
              className="login-input"
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Password
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-button" type="submit">
            {isLogin ? "Log in" : "Register"}
          </button>
          {isLogin ? (
            <p className="toggle-text">
              Don&apos;t have an account?{" "}
              <span className="toggle-link" onClick={() => setIsLogin(false)}>
                Sign up
              </span>
            </p>
          ) : (
            <p className="toggle-text">
              Already have an account?{" "}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>
                Log in
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
