import React from "react";
import "./style.css";
export const introduction = () => {
  return (
    <div>
      <div className="introduction">
        <div>
          <img className="profilepic" src="./images/profile.png" />
        </div>
        <div style={{ marginTop: "10px" }}>
          <div className="titletext">Hi, I am Hadi Masoumi </div>
          <div className="explanationtext">
            <p>Web developer , UI/UX designer</p>
            💌 masimo.hadizzo@gmail.com
            <br />
            <br />
            📞 +989165797005
          </div>
        </div>
      </div>
    </div>
  );
};
export default introduction;
