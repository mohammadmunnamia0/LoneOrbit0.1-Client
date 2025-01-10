import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategory = ({jobs}) => {
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
            jobs.map(job => <JobCard job={job} key={job.id}></JobCard>)
          }
         </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabCategory;
