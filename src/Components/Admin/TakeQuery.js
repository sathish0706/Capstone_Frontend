import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import UseFindUser from "../../Hooks/UseFindUser";

const TakeQuery = () => {
  const { id } = useParams();
  //   console.log(id);
  const [detail, seDetail] = useState("");
  const [user] = UseFindUser();

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
        <i className="fa-solid fa-user"> {user.name}</i>
      </div>
      <div className="takeQuery-container">
        <div className="take-query">
          <h1>call him clear his doubts</h1>

          <h3>Name :{detail.name}</h3>
          <h3>Number :{detail.mobileNumber}</h3>
        </div>
      </div>
    </>
  );
};

export default TakeQuery;
