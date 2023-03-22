import "./query.css";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context";
import Header from "../Header";

const Query = () => {
  const navigate = useNavigate();
  const { queryDetails, user } = useContext(UserContext);

  console.log(queryDetails);

  return (
    <>
      <Header />
      <div className="Header">
        <h3>Queries</h3> 
    <i className="fa-solid fa-user" onClick={() => navigate("/profile")}>
          {user.name}
        </i>
      </div>
      <br />
      <Button variant="outlined" id="back" onClick={() => navigate("/create")}>
        + Create Query
      </Button>
      <div className="totall-Query">
        {queryDetails === []
          ? "Loading"
          : queryDetails.map((queryDetail, i) => (
              <div>
                <div className="query-card" key={i}>
                  <section>
                    {queryDetail.queryTitle}
                    <br />
                    <b>{queryDetail.category}</b>
                  </section>
                  <div className="query-close">
//                     <button>close</button>
                    <br />
//                     <br />
                    <br />
                    <b>{queryDetail.createdAt}</b>
                  </div>
                </div>
              </div>
            ))}
        {/* {queryDetails === [] ? (
          "Loading"
        ) : (
          <div id="query-recent">
            <b>Recent query</b>
            <section>
              <h3>{queryDetails[queryDetails.length - 1].queryTitle}</h3>
              <button>close</button>
            </section>
            <br />
            <h4>Creates at :</h4>
            <h4>{queryDetails[0].createdAt}</h4>
            <br />
            <br />
            <h4>Description :</h4>
            <h4>{queryDetails[queryDetails.length - 1].queryDescription}</h4>
            <button>Go to Query</button>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Query;
