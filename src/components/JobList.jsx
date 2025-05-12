import React from "react";
import mockJobs from "../data/mockJobs";

const JobList = () => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">All Jobs ({mockJobs.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={job.buyer.photo}
                alt={job.buyer.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold">{job.buyer.name}</div>
                <div className="text-xs text-gray-500">{job.buyer.email}</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="text-lg font-bold">{job.job_title}</div>
              <div className="text-sm text-blue-600">{job.category}</div>
              <div className="text-gray-700 mt-1">{job.description}</div>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <span>
                <b>Budget:</b> ${job.min_price} - ${job.max_price}
              </span>
              <span>
                <b>Deadline:</b> {new Date(job.deadline).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
