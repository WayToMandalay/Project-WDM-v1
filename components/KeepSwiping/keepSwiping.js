import React from "react";

const KeepSwiping = () => {
  return (
    <div className="keepSwiping__wrapper">
      <div className="keepSwiping__container">
        <span className="keepSwiping__text hide-xl">Keep swiping</span>
        <span className="keepSwiping__text show-xl">Keep scrolling</span>
        <div className="keepSwiping__arrow" />
      </div>
    </div>
  );
};

export default KeepSwiping;
