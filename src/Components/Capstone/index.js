import React, { useEffect, useState } from "react";
import axios from "axios";
import "./capstone.css";
import UseFindUser from "../../Hooks/UseFindUser";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context";

const Capstone = () => {
  const [capstone, setCapstone] = useState();
 const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const getCapstone = async () => {
    var response = await axios.get("https://capstone-project-ejyp.onrender.com/api/get/capstone");
    console.log(response);
    setCapstone(response.data);
  };

  useEffect(() => {
    getCapstone();
  }, []);

  return (
    <div>
      <div className="Header">
        <h3>Capstone</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>&nbsp; {user.name}</i>
      </div>
      <div>
        {capstone
          ? capstone.map((cpstn, i) => (
              <div className="query-card" key={i}>
                <section>
                  {cpstn.userName}
                  <div>({cpstn.batch}-Capstone Project)</div>
                  <div>{cpstn.capstoneTitle}</div>
                </section>
                <div className="cpstn-btn">
                  <b>yet to be graded</b>
                  <button onClick={() => navigate("/capstone-details")}>
                    capstone
                  </button>
                </div>
              </div>
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default Capstone;
