import React from "react";
import Link from "next/link";

const BackToHomeOwlButton = () => {
  return (
    <Link href="/">
      <a className="backToHomeOwlButton">
        <span className="backToHomeOwlButton-text">Back to homepage</span>
        <span className="backToHomeOwlButton-arrow"></span>
        <span className="backToHomeOwlButton-owl"></span>
      </a>
    </Link>
  );
};
export default BackToHomeOwlButton;
