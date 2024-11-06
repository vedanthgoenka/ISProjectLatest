// import React from "react";
// import cc from "../assets/images/cc2.png"
// import "../assets/css/cc.css"

// function CreditCard(){
//     return(
//         <div>
//             <h1>
//                 My Cards
//             </h1>
//             <div className="main">
                
//                 <img src={cc} alt="credit card" />
//                 <h3>
//                     Credit Card
//                 </h3>
//                 <p>
//                     Type
//                     <span>
//                         Physical
//                     </span>
//                 </p>
//                 <p>
//                     Card Number
//                     <span>
//                     1000 1000 1000 1000
//                     </span>
//                 </p>
//                 <p>
//                     Expiration date
//                     <span>
//                     10/11/24
//                     </span>
//                 </p>
//                 <p>
//                     CVV
//                     <span>
//                         123
//                     </span>
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default CreditCard;

// import React from 'react';
// import "../assets/css/cc.css"
// import cc from "../assets/images/cc2.png"

// const CreditCard = () => {
//   return (
//     <div className="credit-card">
//       <div className="card-image">
//         <img
//           src="https://www.pngmart.com/files/22/Credit-Card-PNG-Photo.png" alt="Credit Card" />
//       </div>
//       <div className="card-details">
//         <h3>Card Number</h3>
//         <p>**** **** **** 1234</p>
//         <h3>Expiration Date</h3>
//         <p>12/25</p>
//         <h3>CVV</h3>
//         <p>***</p>
//         <button className="see-details">See Details</button>
//       </div>
//     </div>
//   );
// };

// export default CreditCard;

import React from 'react';
import "../assets/css/cc.css"
import cc from "../assets/images/cc2.png"

const CustomCard = () => {
  return (
    <div className="custom-card">
      <div className="custom-card-content">
        <div className="card-image">
          <img
            src={cc}
            alt="Credit Card"
          />
        </div>
        <div className="card-details">
          <h3>Card Number</h3>
          <p>**** **** **** 1234</p>
          <h3>Expiration Date</h3>
          <p>12/25</p>
          <h3>CVV</h3>
          <p>***</p>
          <button className="see-details">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
