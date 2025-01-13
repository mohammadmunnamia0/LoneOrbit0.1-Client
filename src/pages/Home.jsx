import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/carousel";
import TabCategory from "../components/TabCategory";
import '../components/Style/gradient.css'


const Home = () => {
  // const jobs = useLoaderData();
  // console.log("Jobs Data:", jobs);  --> before using axios

  return (
    <div>
      <h1 className="text-5xl font-bold my-5 text-center rainbow-text">
        Welcome to LoneOrbit
      </h1>

      <Carousel></Carousel>
      <div >
        <div>
        <h1 className="text-5xl font-bold my-5 text-center">
          {/* Available Jobs - {jobs.length}   --> before using axios */}
          Available Jobs
        </h1>
        </div>

        <div className="mx-auto flex justify-center text-center  px-6 py-10 container">
          <img className="w-auto rounded-md h-[400px] transition-all transform hover:scale-105 hover:opacity-80 duration-300 "
            src="https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif"
            height="100px"
            alt="Loading animation"
          />
        </div>
      </div>

      {/* <TabCategory jobs={jobs}></TabCategory>   --> before using axios */}
      <TabCategory></TabCategory>
      {/*  <TabCategory jobs={jobs}></TabCategory>  --->  passing the jobs that we fetch from mongobd to the TabCategory and there we will map the jobs */}
    </div>
  );
};

export default Home;
