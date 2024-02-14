import React from "react";
import Logo from "./Logo";
import photo from "../Assets/kkimage.jpg";
import "./profile.css";
import Mid from './Mid'
import About from "./About";
import Contactus from "./Contactus";
import Links from "./Links";
import Fun from "./Fun";

const ProfileCard = () => {
  return (
    <div>
      <Logo />
      <div className="flex w-[30rem] h-[11.5rem] mt-20 bg-blue-200 rounded-xl">
        <img
          src={photo}
          alt=""
          className="h-[185px] w-[132px] object-cover justify-center rounded-l-xl"
        />
        <div className="h-[185px] w-[100%] mt-12 ml-10 ">
           <span className="name">Kshitija Kadam</span>
          <p className="font">UI/UX</p>
          <p>
            <strong className="font">React Developer</strong>
          </p>
        </div>
      </div>
      <Mid/>
      <About/>
      <Contactus/>
      <Fun/>
      <Links/>
    </div>
  );
};

export default ProfileCard;
