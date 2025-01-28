import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://kareactnodeapp-g6h8dxh9dxdrhubc.canadacentral-01.azurewebsites.net/user")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Users;
