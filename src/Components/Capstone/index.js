import React, { useEffect, useState } from "react";
import axios from "axios";
import "./capstone.css";
import UseFindUser from "../../Hooks/UseFindUser";
import { useNavigate } from "react-router-dom";

const Capstone = () => {
  const [capstone, setCapstone] = useState();
  const [user] = UseFindUser();

  const navigate = useNavigate();

  const getCapstone = async () => {
    var response = await axios.get("http://localhost:4000/api/get/capstone");
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
        <i className="fa-solid fa-user">&nbsp; {user.name}</i>
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
