import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import  {useState, useEffect } from 'react';
import axios from "axios";


// const TabCategory = ({jobs}) => --> before using axios

const TabCategory = () => {

  //used the axios for fetch the data insted of using loader in routes

 const [jobs, setJobs] = useState([]);
 useEffect(()=>{
  const getData = async() =>{
    const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
    setJobs(data);
  }
  getData();
 })


  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold capitalize">
          {" "}
          Browse Jobs By Categories
        </h1>
        <p className="mt-4 text-xl">
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      </div>
      <div>
        <Tabs>
          <div className="flex justify-center items-center">
            <TabList>
              <div className="ml-5">
                <Tab>Web Development</Tab>
                <Tab>Graphics Design</Tab>
                <Tab>Machine Learning</Tab>
              </div>
            </TabList>
          </div>

          <TabPanel>
         <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
         {
            jobs
            .filter(j=>j.category==='Web Development') //for specif jobs categories
            .map(job => 
            <JobCard key={job._id} job={job} ></JobCard>)
          }
         </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
         {
            jobs
            .filter(j=>j.category==='Graphics Design')
            .map(job => 
            <JobCard key={job._id} job={job} ></JobCard>)
          }
         </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
         {
            jobs
            .filter(j=>j.category==='Digital Marketing')
            .map(job => 
            <JobCard key={job._id} job={job} ></JobCard>)
          }
         </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabCategory;
