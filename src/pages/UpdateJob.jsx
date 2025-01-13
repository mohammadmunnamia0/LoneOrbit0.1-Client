import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import { IoIosArrowBack } from "react-icons/io";

const UpdateJob = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const job = useLoaderData();

  const {
    _id,
    job_title,
    category,
    deadline,
    description,
    min_price,
    max_price,
    buyer,
  } = job || {};

  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

  const handleUpdateForm = async (e) => {
    e.preventDefault();
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
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/job/${_id}`,
        jobData
      );
      console.log(data);
      toast.success("Job Updated successfully");
      navigate("/my_posted_jobs");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to Update Job. Please try again.");
    }
  };

  return (

    <>
    <div className=" container">
    <button>
    
            </button>
    </div>
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
      <span className="btn border-cyan-500 hover:border-green-500-500"
        onClick={() => { navigate(-1) }} >
                    <IoIosArrowBack />
                  </span>
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Update a Job
        </h2>

        <form onSubmit={handleUpdateForm}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                {job_title}
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              <DatePicker
                className=" w-full px-4 py-2 border rounded-lg"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={category}
                className="border p-2 rounded-md"
              >
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Minimum Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Maximum Price
              </label>
              <input
                id="max_price"
                name="max_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              cols="30"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
    </>
    
    
  );
};

export default UpdateJob;