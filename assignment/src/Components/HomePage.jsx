import React, { useState, useEffect } from "react";
import loadingImg from "../Assets/qrchimp-loader.svg";
import ProfileCard from "./ProfileCard";
import Buttons from "./Buttons";
import "./home.css";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        const mockData = { name: "John Doe", email: "john@example.com" };
        setData(mockData);
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      {isLoading ? (
        <div className="loading">
          <img src={loadingImg} alt="Loading..." className="loadimg" />
        </div>
      ) : (
        <div>
          <ProfileCard profileData={data} />
          <Buttons />
        </div>
      )}
    </div>
  );
};

export default HomePage;
