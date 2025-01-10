/* eslint-disable react/prop-types */

const JobCard = ({job}) => {

  const {job_title	,category	,deadline	,description	,min_price,max_price} = job || {}
  return (
    <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          {job.deadline}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {job.job_title}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
         {job.category}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
         {job.description}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: ${job.min_price} - ${job.max_price}
        </p>
      </div>
    </div>
  )
}

export default JobCard
