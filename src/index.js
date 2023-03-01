// //Create a React app from scratch.
// //Show a single h1 that says "Good morning" if between midnight and 12PM.
// //or "Good Afternoon" if between 12PM and 6PM.
// //or "Good evening" if between 6PM and midnight.
// //Apply the "heading" style in the styles.css
// //Dynamically change the color of the h1 using inline css styles.
// //Morning = red, Afternoon = green, Night = blue.

// import React from "react";
// import ReactDOM from "react-dom";

// var hr = new Date();
// var hour = hr.getHours();

// let message;

// const customStyle = {
//   color : ""
// }

// if(hour < 12){
//   message = "Good Morning"
//   customStyle.color = "red"
// }
// else if(hour < 18 && hour > 12){
//   message = "Good Afternoon"
//   customStyle.color = "green"

// }
// else {
//   message = "Good Evening"
//   customStyle.color = "blue"
// }

// ReactDOM.render(
//   <h1 className="heading" style={customStyle}>
//     {message}
//   </h1>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

let message;

var getHour = new Date();
const hour = getHour.getHours();

const costumStyle = {
  color: ""
};

if (hour < 12) {
  message = "Good Morning";
  costumStyle.color = "red";
} else if (hour < 18) {
  message = "Good Afternoon";
  costumStyle.color = "green";
} else {
  message = "Good Night";
  costumStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={costumStyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
