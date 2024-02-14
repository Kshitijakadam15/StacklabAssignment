import { Card } from "@mui/material";
import React from "react";
import "./profile.css";

const About = () => {
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "16rem",
          width: "30rem",
          marginTop: "5",
          marginBottom: "6",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[16rem]  w-[30rem] mt-5 mb-6 text-center"
      >
        <h2 className="heading">About Me</h2>
        <div className="paragraph">
        Hi, Myself Kshitija,
          <br />
          A dedicated and result-oriented Software Developer possessing a passion for programming and seeking for career to make the most of my coding skills and knowledge possessed for goals and ambitions of the organization
        </div>
      </Card>
    </div>
  );
};

export default About;
