import React, { useState } from "react";
import "./App.css";
// controlled Inputs
// controlled vs uncontrolled
function App() {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");

  function handleSubmit() {
    console.log(name, income);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleIncomeChange(e) {
    setIncome(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} className="formStyle" >
          <div className="formField">
            <span>Name:</span>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="formField">
            <span>Income:</span>
            <select value={income} onChange={handleIncomeChange}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
