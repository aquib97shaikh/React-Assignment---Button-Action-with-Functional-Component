import React, { Component, useState } from "react";
import "./../styles/App.css";
click = "";
function showMsg() {
  click =
    click == "" ? (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    ) : (
      ""
    );
}
function App() {
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={showMsg}>
        Click Me!
      </button>
      {click}
    </div>
  );
}

export default App;
