import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("");
  
  function showMsg() {
    console.log(para);
    setPara(
      para == "" ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        ""
      ))
  }
  return (
    <div id="main">
      <button id="click" onClick={showMsg}>
        Click Mee!
      </button>
      {para}
    </div>
  );
}

export default App;
