import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const inputEvent = (event) => {
    event.preventDefault();
    setName(event.target.value);
    console.log(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <div>
        <h1>Result {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={inputEvent}
          value={name}
        />
        <button onClick={onSubmit}>Click Me☺️</button>
      </div>
    </>
  );
};

export default App;
