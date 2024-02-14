import { Card,Divider } from '@mui/material'
import "./profile.css";
import React from 'react'
import insta from '../Assets/insta_icon@72x.png'
import linked from '../Assets/linkedin_icon@72x.png'
import link from '../Assets/weblink.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Links = () => {
  
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
          height: "13rem",
          width: "30rem",
          marginTop: "5",
          marginBottom: "6",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[20rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[3.5rem] w-[100%] ml-8 mt-8 justify-center">
           <p className='heading'>Find Me Here</p> 
        </div>
        <Divider orientation="horizontal" sx={{ width: "90%", backgroundColor: "rgb(229, 231, 235)", marginTop:"8px" }}  />
        <div className="flex h-[3rem] w-[100%]  ">
            <a href="https://www.linkedin.com/in/kshitijakadamswd/" className='flex h-[3rem] w-[100%] ml-8 mt-5'>
            <img src={linked} alt="Contact icon" className='w-[3rem] image'/>
            <span className="heading2">LinkedIn</span>
            <ArrowForwardIosOutlinedIcon className='arrow' />
            </a>
        </div>
      </Card>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "6rem",
          width: "30rem",
          marginTop: "5",
          marginBottom: "6",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[10rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[3rem] w-[100%]  ">
            <a href="https://www.instagram.com/artholic_mind" className='flex h-[3rem] w-[100%] ml-8 mt-5'>
            <img src={insta} alt="Contact icon" className='w-[3rem] image'/>
            <span className="heading2">Contact Us</span>
            <ArrowForwardIosOutlinedIcon className='arrow' />
            </a>
        </div>
      </Card>
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "13rem",
          width: "30rem",
          marginTop: "5",
          marginBottom: "6",
          textAlign: "center",
        }}
        className="flex flex-col justify-center items-center h-[20rem] w-[30rem] mt-5 mb-6 text-center"
      >
        <div className="flex h-[1rem] w-[100%] ml-8 mt-8 justify-center">
           <p className='heading h-[2rem]'>Links</p> 
        </div>
        <div className="flex h-[1rem] w-[100%] ml-8 mt-5 justify-center">
        <p className='paragraph h-[1rem]'>Find Me Here</p>
        </div>
        <Divider orientation="horizontal" sx={{ width: "90%", backgroundColor: "rgb(229, 231, 235)", marginTop:"8px" }}  />
        <div className="flex h-[3rem] w-[100%]  ">
            <a href="#" className='flex h-[3rem] w-[100%] ml-8 mt-5'>
            <img src={link} alt="Contact icon" className='w-[3rem] image'/>
            <span className="head">Company Website</span>
            <ArrowForwardIosOutlinedIcon className='arrow2' />
            </a>
        </div>
      </Card>
    </div>
  )
}

export default Links
