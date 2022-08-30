import React from "react";
import "../componentsCSS/loader.css";

const Loader = () => {
  return (
    <div className="loader">
    <div className="face">
        <div className="circle"></div>
    </div>
    <div className="face">
        <div className="circle"></div>
    </div>
</div>
  );
};

export default Loader;