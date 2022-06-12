import React from "react";
const d = new Date();
const time = d.getHours();
let wish = "";
let col = "";
if (time > 0 && time < 12) {
  wish = "Good Morning";
  col = "red";
} else if (time > 12 && time < 18) {
  wish = "Good Afternoon";
  col = "green";
} else {
  wish = "Good Afternoon";
  col = "blue";
}
function Heading(){
  return <h1 className="heading" style={{ color: col }}>{wish}</h1>
}
export default Heading;