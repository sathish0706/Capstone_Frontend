import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Context";

const TakeQuery = () => {
  const { id } = useParams();
   const navigate = useNavigate();
  //   console.log(id);
  const [detail, seDetail] = useState("");
    const { user } = useContext(UserContext);

  const getDetailById = async () => {
    const res = await axios.get(
      `https://capstone-project-ejyp.onrender.com/api/get/query/${id}`,
      {
        withCredentials: true,
      }
    );
    seDetail(res.data);
    console.log(res);
  };

  useEffect(() => {
    getDetailById();
  }, []);

  return (
    <>
      <div className="Header">
        <h3>Queries</h3>
        <i className="fa-solid fa-user" onClick={() => navigate("/profile")}> {user.name}</i>
      </div>
      <div className="takeQuery-container">
        <div className="take-query">
          <h1>Query Details</h1>

          <h3>Name :{detail.name}</h3><br/>
          <h3>Number :{detail.mobileNumber}</h3><br/>
          <h3>Tittle :{detail.queryTitle}</h3><br/>
          <h3>Description :{detail.queryDescription}</h3><br/>
          <h3>creates At :{detail.createdAt}</h3>
        </div>
      </div>
    </>
  );
};

export default TakeQuery;
