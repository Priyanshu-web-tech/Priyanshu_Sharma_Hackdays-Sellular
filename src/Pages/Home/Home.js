import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import { Triangle } from "react-loader-spinner";
import "./Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <Triangle
            height={100}
            width={100}
            color={"white"}
            ariaLabel={"Loading"}
            className="loading-container"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
