import React from "react";
import "../Navbar/sidebar.css";
import Avatar from "../../images/avatar.svg";
import * as Icons from "react-icons/fa";
import * as VsIcons from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Avatar} />
        <p>Full Name</p>
      </div>
      <div className="sidebar-content">
        <ul>
          <div className="menu-link">
            <li>
              <Link to="/profile" className="menu-bars">
                <VsIcons.VscAccount />
                <span>Profile</span>
              </Link>
            </li>
          </div>
          <div className="menu-link">
            <li>
              <Link to="/academics" className="menu-bars">
                <Icons.FaBookOpen />
                <span>Academics</span>
              </Link>
            </li>
          </div>
          <div className="menu-link">
            <li>
              <Link to="/payment" className="menu-bars">
                <Icons.FaMoneyBill />
                <span>Fees/Dues</span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

// const Sidebar = () => {
//   return (
//     <nav className="sidebar sidebar-bunker">
//       <div className="sidebar-header">
//         <a href="/" className="sbar-logo">
//           {" "}
//           <img src={Avatar} alt="Logo" />
//         </a>
//       </div>
//       <div className="profile-element">
//         <div className="profile-text">
//           <h6>Name here</h6>
//         </div>
//       </div>
//       <div className="sidebar-body">
//         <nav className="sidebar-nav">
//           <ul>
//             <li className="nav-label">Header Menu</li>

//             {/* <li className="mm-active">
//                         <Link to="/admin"> <i className="typcn typcn-messages mr-2"></i>{t('header.dashboard')}</Link>
//                     </li> */}

//             <li className="mm-active">
//               {/* <Link to="/admin">
//                 {" "}
//                 <i className="typcn typcn-document-text mr-2"></i>
//                 {t("header.visaManagement")}
//               </Link> */}
//               Element 1
//             </li>

//             <li style={{ display: "block" }}>
//               <a className="material-ripple" href="#">
//                 Element 2
//               </a>
//               <ul className="nav-second-level">
//                 <li>
//                   {/* <Link to="/admin/country">{t("header.countryPrice")}</Link> */}
//                   Element 3
//                 </li>
//                 <li>
//                   {/* <Link to="/admin/express-services">
//                     {t("header.expressServices")}
//                   </Link> */}
//                   Element 4
//                 </li>
//                 <li>
//                   {/* <Link to="/admin/add_on">{t("header.addOn")}</Link> */}
//                   Element 5
//                 </li>
//                 <li>
//                   {/* <Link to="/admin/arrival-ports">Port Of Arrival</Link> */}
//                   Element 6
//                 </li>
//               </ul>
//             </li>

//             <li style={{ display: "block" }}>
//               {/* <Link to="/admin/user">
//                 {" "}
//                 <i className="typcn typcn-user mr-2"></i>
//                 {t("header.account")}
//               </Link> */}
//               Element 7
//             </li>

//             <li style={{ display: "block" }}>
//               {/* <Link to="/admin/customers">
//                 {" "}
//                 <i className="typcn typcn-group mr-2"></i>
//                 {t("header.member")}
//               </Link> */}
//               Element 8
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </nav>
//   );
// };

export { Sidebar };
