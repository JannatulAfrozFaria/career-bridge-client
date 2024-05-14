import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Lottie from "lottie-react";
// import SoloTrip from "/src/SoloTrip.json";


const AllJobs = () => {
    // Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | All Jobs"
    },[])

    const jobs = useLoaderData();
    const [searchedJobs, setSearchedJobs] = useState(jobs);

    const handleSearch = (e) =>{
        // const 
        // setSearchedJobs()
    }
    return (
        <div>
            <div  className='w-1/3 mx-auto' >
                    {/* <Lottie className='w-2/3 mx-auto' animationData={SoloTrip} /> */}
            </div>
            <div>
                <div className='mx-auto w-4/5 text-center'>
                    <h3 className="text-2xl md:text-3xl mt-12 text-sky-500 ">Watch Jobs added by People From Around The Globe!</h3>
                    <h2 className="text-base md:text-xl text-gray-500 mt-4 mb-8">There are about {jobs.length} Jobs listed till Now. You can add more! </h2>
                    {/* SEARCH BUTTON */}
                    <div className="join">
                        <div>
                            <div>
                            <input className="input input-bordered join-item" placeholder="Search"/>
                            </div>
                        </div>
                        {/* <select className="select select-bordered join-item">
                            <option disabled selected>Filter</option>
                            <option>Sci-fi</option>
                            <option>Drama</option>
                            <option>Action</option>
                        </select> */}
                        <div className="indicator">
                            {/* <span className="indicator-item badge badge-secondary">new</span>  */}
                            <button onClick={()=>handleSearch(e)} className="btn join-item">Search</button>
                        </div>
                    </div>
                    {/* SEARCH END---- */}
                </div>
            </div>
            {/* the LIST OF ALL SPOTS */}
            <div data-aos="fade-up" data-aos-duration="3000" className='mx-auto w-5/6' >
                <table className="table">
                        <thead className='mx-0 text-center'>
                        <tr>
                            <th className='hidden md:flex'>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th className="hidden md:flex flex-row gap-8">
                                  <h2>Application Deadline</h2>
                                  <h2>Salary Range</h2>
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className='text-gray-500'>
                            {
                                searchedJobs.map(job=>  <tr key={job._id}>
                                    <th  className='hidden md:flex'>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar hidden md:flex">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={job.photo} />
                                            </div>
                                            </div>
                                            <div>
                                                <div className="font-bold"> {job.job} </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.postdate}
                                        <br/>
                                    </td>
                                    <td className="hidden md:flex flex-row gap-16 ">
                                        <h2>{job.deadline}</h2>
                                        <h2>{job.range}</h2>
                                     </td>
                                    <th>
                                        <Link to={`/job/${job._id}`} ><button className='btn basic-btn' >View Details</button></Link>
                                    </th>
                                </tr> )
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default AllJobs;