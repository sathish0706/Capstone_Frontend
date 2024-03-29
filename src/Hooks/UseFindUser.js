import axios from "axios";
import { useEffect, useState } from "react";

const UseFindUser = () => {
  const [user, setUser] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get('https://capstone-project-ejyp.onrender.com/api/user', {
        withCredentials: true,
      });
      if (response.data.success) {
        console.log(response.data.success);
        setUser(response.data.user);
        console.log(response.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return [user, setUser];
};

export default UseFindUser;
