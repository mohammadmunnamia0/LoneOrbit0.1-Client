import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

// const TabCategory = ({jobs}) => --> before using axios

const TabCategory = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:9000/jobs");
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []); // Added dependency array to prevent infinite loop

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl text-red-500">{error}</h2>
      </div>
    );
  }

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
                <Tab>Digital Marketing</Tab>
              </div>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((j) => j.category === "Web Development")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((j) => j.category === "Graphics Design")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((j) => j.category === "Digital Marketing")
                .map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabCategory;
