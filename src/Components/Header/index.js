import React from "react";
import "./header.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);

  const handleLogout = async () => {
    const response = await axios.get(
      "https://capstone-project-ejyp.onrender.com/api/logout",
      {
        userCredentials: true,
      }
    );
    if (response) {
      removeCookie("accessToken");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="header-container">
        <div className="title">
          <h3>Zen desk</h3>
        </div>
        <div className="main-content">
          <div className="main">Query</div>
          <div className="main" onClick={() => navigate("/capstone")}>
            Capstone
          </div>
          <div className="main" onClick={handleLogout}>
            Login/Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
