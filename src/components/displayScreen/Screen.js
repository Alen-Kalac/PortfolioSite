import React from "react";
import "./Screen.css";

function Screen({bgImage}) {
  return (
    <>
      <div className="screen">
        <div className="screen-image" style={{backgroundImage:`url(${bgImage})`}}> </div>
        <div className="screen-overlay"></div>
        <div class="screen-content">
          <div class="screen-user">
            <span class="name">
              ALEN KALAČ
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Screen;
