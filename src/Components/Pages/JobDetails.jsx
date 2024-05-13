import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const singleJob = useLoaderData();
    const {photo, job, category, postdate, description,range,number} = singleJob;
    return (
        <div className='text-center mx-auto'>
            <h2 data-aos="fade-down" data-aos-duration="2000"  className='text-xl md:text-2xl lg:text-3xl font-bold theme-light'>Job Title : {job} </h2>
            <div data-aos="fade-right" data-aos-duration="3000"  className='text-center my-5 mx-auto w-full'>
                <img  className=' w-3/5 h-[300px] mx-auto rounded-3xl ' src={photo} alt="" />
            </div>
            {/* <div data-aos="fade-left" data-aos-duration="2000" className=' text-gray-500 w-full md:w-3/5 mx-auto text-base md:text-xl text-left'> 
                    <h2 className='font-semibold'>Description: </h2>
                    <p className='text-justify'>{description} </p>
            </div> */}
            <div data-aos="fade-right" data-aos-duration="3000" className=' text-gray-500 w-full md:w-3/5 mx-auto text-base md:text-xl text-left grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div data-aos="fade-left" data-aos-duration="2000" className=' text-gray-500 text-base text-left'> 
                        <h2 className='font-semibold'>Description: </h2>
                        <p className='text-justify'>{description} </p>
                </div>
                {/* <div className='my-4'>
                    <p className='theme-light font-medium'> <span className='font-semibold text-gray-500'>Job Category:</span> {category} </p>
                    <p className='theme-light font-medium' > <span className='font-semibold text-gray-500'>Job Posting Date :</span> {postdate} </p>
                </div> */}
                <div className='my-4'>
                    <p className='theme-light font-medium text-base'> <span className='font-semibold text-gray-500'>Salary Range:</span> {range} </p>
                    <p className='theme-light font-medium text-base' > <span className='font-semibold text-gray-500'>Number of Applicants :</span> {number} </p>
                </div>
            </div>
            <button data-aos="fade-left" data-aos-duration="3000" className='btn basic-btn mt-6 w-3/5 '>
                        <Link to='/' >Apply</Link>
                    </button>
        </div>
    );
};

export default JobDetails;