import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import {
  FaAlignLeft,
  FaBriefcase,
  FaCalendarAlt,
  FaDollarSign,
  FaTag,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const job_title = e.target.job_title.value;
    const email = e.target.email.value;
    const deadline = startDate;
    const category = e.target.category.value;
    const min_price = parseFloat(e.target.min_price.value);
    const max_price = parseFloat(e.target.max_price.value);
    const description = e.target.description.value;

    const jobData = {
      job_title,
      deadline,
      category,
      min_price,
      max_price,
      description,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        jobData
      );
      toast.success("Job posted successfully! 🎉");
      navigate("/my_posted_jobs");
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("Failed to post job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <IoIosArrowBack className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleForm} className="space-y-8">
            {/* Job Title */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <FaBriefcase className="w-5 h-5 mr-2 text-blue-600" />
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                required
                placeholder="Enter job title"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <FaTag className="w-5 h-5 mr-2 text-blue-600" />
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500"
              />
            </div>

            {/* Deadline and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <FaCalendarAlt className="w-5 h-5 mr-2 text-blue-600" />
                  Deadline
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <FaTag className="w-5 h-5 mr-2 text-blue-600" />
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <FaDollarSign className="w-5 h-5 mr-2 text-blue-600" />
                  Minimum Price
                </label>
                <input
                  id="min_price"
                  name="min_price"
                  type="number"
                  required
                  min="0"
                  placeholder="Enter minimum price"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <FaDollarSign className="w-5 h-5 mr-2 text-blue-600" />
                  Maximum Price
                </label>
                <input
                  id="max_price"
                  name="max_price"
                  type="number"
                  required
                  min="0"
                  placeholder="Enter maximum price"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <FaAlignLeft className="w-5 h-5 mr-2 text-blue-600" />
                Job Description
              </label>
              <textarea
                name="description"
                id="description"
                required
                rows="6"
                placeholder="Describe the job requirements, responsibilities, and any other important details..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg text-white font-medium transition duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Posting..." : "Post Job"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
