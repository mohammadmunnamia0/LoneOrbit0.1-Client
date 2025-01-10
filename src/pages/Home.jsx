import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/carousel";
import TabCategory from "../components/TabCategory";

const Home = () => {
  const jobs = useLoaderData();
  console.log("Jobs Data:", jobs);

  return (
    <div>
      <h1 className="text-5xl font-bold my-5 text-center">
        Welcome to LoneOrbit
      </h1>
      <Carousel></Carousel>
      <h1 className="text-5xl font-bold my-5 text-center">
        Available Jobs - {jobs.length}
      </h1>
      <TabCategory jobs={jobs}></TabCategory> 
      {/*  <TabCategory jobs={jobs}></TabCategory>  --->  passing the jobs that we fetch from mongobd to the TabCategory and there we will map the jobs */}
    </div>
  );
};

export default Home;
