import React from "react";
import "./profile.css";
import { Card, Divider } from "@mui/material";
import call from "../Assets/contactus.png";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const Contactus = () => {
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
          height: "25rem",
          width: "30rem",
          marginTop: "5",
          marginBottom: "6",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[25rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[3.5rem] w-[100%] ml-8 mt-5">
          <img src={call} alt="Contact icon" />
          <span className="heading2">Contact Us</span>
        </div>
        <Divider orientation="horizontal" sx={{ width: "90%", backgroundColor: "rgb(229, 231, 235)", marginTop:"8px" }}  />
        
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5">
          <p className="heading2">Call Me</p>
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5" >
          <a href="tel:+7517052003" className="small">+7517052003</a>
        </div>
        
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5">
          <p className="heading2">Email</p>
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5" >
          <a href="kshitijakadam219@gmail.com" className="small">kshitijakadam219@gmail.com</a>
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5">
          <p className="heading2">Address</p>
        </div>
        <div className="flex h-[2rem] w-[100%] ml-8 mt-5" >
          <span className="small">805 Kasba Peth Tanaji Chowk Barshi</span>
        </div>
        <div className="flex h-[2rem] w-[100%] ml-8 mt-5">
            <a className="btn" href="https://maps.app.goo.gl/CWQxDbKFhsWLCkJG9"><NearMeOutlinedIcon/>Directions</a>
        </div>
      </Card>
    </div>
  );
};

export default Contactus;
