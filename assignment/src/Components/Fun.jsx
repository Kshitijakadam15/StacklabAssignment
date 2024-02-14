import React from "react";
import { Card } from "@mui/material";
import "./profile.css";
import logo from '../Assets/media_3.jpeg'
import media from'../Assets/media.jpeg'
import media2 from '../Assets/media_1.jpeg'
import media3 from '../Assets/media_2.jpeg'

const Fun = () => {
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "52rem",
          width: "30rem",
          marginTop: "5",
          marginBottom: "6",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[52rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[2rem] w-[100%] ml-5 mt-8 justify-center">
          <p className="heading">Fun At STACKLAB</p>
        </div>
        <div className="flex h-[3.5rem] w-[100%] ml-5 justify-center">
            <p className="paragraph">We understand the importance of work-life balance, We try to create an atmosphere that no one wants to leave.</p>
        </div>
        <img src={logo} alt="" className="flex h-[10rem] w-[100%] mt-8 placeholder:justify-center" />
        <div className="flex h-[14rem] w-[100%] mt-2 justify-center">
            <img src={media} alt="" className="w-[48%] "/>
            <img src={media3} alt="" className="w-[48%] ml-2" />
        </div>
        <div className="flex h-[20rem] w-[100%] mt-5 justify-center"><img src={media2} alt="" /></div>
        <div className="flex h-[3rem] w-[100%]  ">
          <a
            href="https://www.linkedin.com/in/kshitijakadamswd/"
            className="flex h-[3rem] w-[100%] ml-8 mt-5"
          ></a>
        </div>
      </Card>
    </div>
  );
};

export default Fun;
