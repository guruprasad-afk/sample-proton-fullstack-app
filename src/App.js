import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const apiCall = () => {
    console.log("Api Called");

    const url = `${process.env.REACT_APP_NODE_URL}/testAPI`;

    fetch(url)
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="App">
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
