import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const JobDetails = () => {
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | Job Details"
    },[])

    const {user} = useContext(AuthContext);
    console.log(user);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const resume = form.resume.value;
        const email = user.email;
        const username = user.displayName;
        const appliedJob = { username,email, resume}
        console.log(appliedJob);
    }
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
            {/* <button data-aos="fade-left" data-aos-duration="3000" className='btn basic-btn mt-6 w-3/5 '>
                        <Link to='/' >Apply</Link>
                    </button> */}

                    {/*---------MODAL----------MODAL------------MODAL------- */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button  onClick={()=>document.getElementById('my_modal_1').showModal()} data-aos="fade-left" data-aos-duration="3000" className='btn basic-btn mt-6 w-3/5'>Apply</button>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                 <form  onSubmit={handleSubmit} action="" method="dialog">
                    {/* USER ----NAME */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="User Name" name="username" className="input input-bordered" required defaultValue={user.displayName} />
                    </div>
                    {/* USER-----EMAIL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required defaultValue={user.email} />
                    </div>
                    {/* RESUME-----LINK */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume Link</span>
                        </label>
                        <input type="text" placeholder="Resume" name="resume" className="input input-bordered" required />
                    </div>
                    <input type="submit" value="Submit Application" className="btn basic-btn w-full my-5"/>
                 </form>
                {/* Close-------BUtton */}
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-error w-full">Close</button>
                    </form>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default JobDetails;