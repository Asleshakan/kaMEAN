import React, { useEffect, useState } from "react";
import axios from "axios";

const Investments = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/investments")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching investments data:", error));
  }, []);

  return (
    <div>
      <h1>Investments</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Investments;
