import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Include the loader CSS here

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vercel-backend-demo-umber.vercel.app/");
        if (!response) {
          setData("No Data available");
        } else {
          setData(response.data.msg);
        }
      } catch (error) {
        setData(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1>Hello DM</h1>
          <h1>{data}</h1>
        </>
      )}
    </div>
  );
};

export default App;
