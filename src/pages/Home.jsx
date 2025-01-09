import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/carousel";
import TabCategory from "../components/TabCategory";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  return (
    <div>
      <h1 className="text-5xl font-bold my-5 text-center">
        Welcome to LoneOrbit - {jobs.length}
      </h1>
      <Carousel></Carousel>
      <TabCategory></TabCategory>
    </div>
  );
};

export default Home;
