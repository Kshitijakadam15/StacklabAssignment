import React from "react";
import logo from "../Assets/logo_name_black_v.png";

const Logo = () => {
  return (
    <div className="flex justify-center w-[115px] h-[100px] mt-28 ml-[40%] ">
      <img src={logo} alt="" className="w-[115px] h-[100px] object-cover justify-center" />
    </div>
  );
};

export default Logo;
