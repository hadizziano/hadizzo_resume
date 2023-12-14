import React from "react";

export const introduction = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          background: "black",
          display: "flex",
          position: "fixed",
          color: "white",
          padding: "10px",
          top: "50px",
          margin: "10px",
          fontWeight: "400",
          borderRight: "solid 1px gray",
        }}
      >
        <div>
          <img width="150px" height="150px" src="./images/profile.jpg" />
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              color: "#20d3d6",
              fontSize: "20px",
              fontFamily: "sans-serif",
            }}
          >
            Seyed Hadi Masoumi Dezfouli
          </div>
          <p style={{ fontSize: "13px", color: "white" }}>
            Web developer , UI/UX designer
          </p>
          💌 masimo.hadizzo@gmail.com
          <br />
          <br />
          📞 +989165797005
        </div>
      </div>
    </div>
  );
};
export default introduction;
