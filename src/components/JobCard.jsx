/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const JobCard = ({job}) => {

  const {
    _id, 
    job_title	,
    category	,
    deadline	,
    description	,
    min_price,
    max_price} = job || {}
  return (
    <Link to={`/job/${_id}`} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
        Deadline: {new Date(deadline).toLocaleDateString()}

        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {job_title}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
         {category}
        </h1>

        <p title={description} className='mt-2 text-sm text-gray-600 '>
         {description.substring(0,70)}... 
         {/* {description.substring(0,70)}...  
         
--> by doing ths is the discription is tooo long that time ti will show only 70 word and by hover on the titile it will show full text.         */}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: ${min_price} - ${max_price}
        </p>
      </div>
    </Link>
  )
}

export default JobCard
