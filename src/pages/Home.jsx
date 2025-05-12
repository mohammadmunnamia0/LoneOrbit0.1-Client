import React from "react";
import { FaBriefcase, FaChartLine, FaHandshake, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobList from "../components/JobList";
import "../components/Style/gradient.css";
import TabCategory from "../components/TabCategory";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6">
                Find Your Dream Job or Hire Top Talent
              </h1>
              <p className="text-xl mb-8">
                Connect with skilled professionals and exciting opportunities in
                tech, design, and marketing.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/all_jobs"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
                >
                  Find Jobs
                </Link>
                <Link
                  to="/add_jobs"
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Post a Job
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://cdn.dribbble.com/users/1299339/screenshots/16962094/media/ee0c0e0a0a0c0c0c0c0c0c0c0c0c0c0c.gif"
                alt=""
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">10K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaBriefcase className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">5K+</h3>
              <p className="text-gray-600">Jobs Posted</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaHandshake className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">3K+</h3>
              <p className="text-gray-600">Successful Hires</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">98%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="mb-4">
                Find top web development talent for your projects
              </p>
              <Link
                to="/all_jobs"
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Browse Jobs
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-xl text-white hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Graphics Design</h3>
              <p className="mb-4">Connect with creative graphic designers</p>
              <Link
                to="/all_jobs"
                className="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Browse Jobs
              </Link>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-600 p-8 rounded-xl text-white hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
              <p className="mb-4">Hire expert digital marketers</p>
              <Link
                to="/all_jobs"
                className="inline-block bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and complete your profile to get started
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Post or Find Jobs</h3>
              <p className="text-gray-600">
                Post your job requirements or browse available positions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Connect & Collaborate</h3>
              <p className="text-gray-600">
                Connect with professionals and start working together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Found my dream job through LoneOrbit. The platform is intuitive
                and the community is amazing!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600">Graphic Designer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a freelancer, LoneOrbit has helped me find consistent work
                and great clients."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Emily Davis</h4>
                  <p className="text-gray-600">Digital Marketer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The quality of talent on LoneOrbit is outstanding. Found the
                perfect team for our project."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of professionals and companies on LoneOrbit
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/registration"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Sign Up Now
            </Link>
            <Link
              to="/all_jobs"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Original Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Available Jobs
          </h2>
          <TabCategory />
        </div>
      </div>

      {/* Show all jobs below the main homepage sections */}
      <section className="mt-12">
        <JobList />
      </section>
    </div>
  );
};

export default Home;
