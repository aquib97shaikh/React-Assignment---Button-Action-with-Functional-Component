import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [click, setClick] = useState("");
  
  function showMsg() {
    setClick(
      click == "" ? (
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
        Click Me!
      </button>
      {click}
    </div>
  );
}

export default App;
