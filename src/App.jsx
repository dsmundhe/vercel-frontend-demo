import React from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/");
        if (!response) {
          setData("No Data available");
          return;
        }
        setData(response.data.msg);
      } catch (error) {
        setData(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Hello DM</h1>
      <h1>{data}</h1>
    </div>
  );
};

export default App;
