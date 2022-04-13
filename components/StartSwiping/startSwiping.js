import React from "react";

const StartSwiping = () => {
  return (
    <div className="start-swiping">
      <span className="start-swiping_l1">Start</span>
      <br />
      <div className="start-swiping_l2 hide-xl">swiping</div>
      <div className="start-swiping_l2 show-xl">scrolling</div>

      <span className="swiping-star swiping-star-1"></span>
      <span className="swiping-star swiping-star-2"></span>
      <span className="swiping-star swiping-star-3"></span>
    </div>
  );
};

export default StartSwiping;
