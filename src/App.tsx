import React from "react";
import "./App.css";

const SetNumOfClicks = 100000;

function InsertClick() {
  let NumOfClicks = 0;
  const ClicksArray = [];
  while (NumOfClicks <= SetNumOfClicks) {
    ClicksArray.push(
      <input
        id={NumOfClicks.toString()}
        key={NumOfClicks.toString()}
        type="checkbox"
      />
    );
    NumOfClicks += 1;
  }
  return ClicksArray;
}

setInterval(() => {
  const CheckBox = document.getElementById(
    Math.floor(Math.random() * SetNumOfClicks).toString()
  ) as HTMLInputElement;
  CheckBox.checked = Math.random() < 0.5;
}, 0);

function App() {
  return (
    <div className="App">
      <h1>AUTISM TRAP GO!!!!</h1>
      <hr />
      <div className="Container">{InsertClick()}</div>
      <hr />
      <sub>By dakimasu using React.</sub>
    </div>
  );
}

export default App;
