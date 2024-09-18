import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const JobDetails = () => {
    // const [showModal,setShowModal] = useState(false);
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | Job Details"
    },[])

    const singleJob = useLoaderData();
    const {photo, job, deadline,postdate, description,range,number,category,username} = singleJob;

    const {user} = useContext(AuthContext);

    const handleApply =()=>{
        if ( new Date() < new Date(deadline)){
            // setShowModal(true);
            document.getElementById('my_modal_1').showModal()
        }
        else{
            Swal.fire({
                title: 'Error',
                text: 'Deadline Exceeded!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const resume = form.resume.value;
        const email = user.email;
        const username = user.displayName;
        const appliedJob = { username,email, resume,singleJob}
        console.log(appliedJob);
            //TRIAL------1
            //send data to server
            fetch('http://localhost:5000/appliedJobs',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(appliedJob)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    document.getElementById('my_modal_1').close()
                    Swal.fire({
                            title: 'Success',
                            text: 'Applied in this Job Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                }
            })
        }
   
    
    return (
        <div className='min-h-screen w-4/5 md:w-3/4 text-center mx-auto'>
            <h2 data-aos="fade-down" data-aos-duration="2000"  className='text-xl md:text-2xl lg:text-3xl font-bold theme-light'>Job Title : {job} </h2>
            <div data-aos="fade-right" data-aos-duration="3000"  className='text-center my-5 mx-auto w-full'>
                <img  className=' w-3/5 h-[300px] mx-auto rounded-3xl ' src={photo} alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" className=' text-gray-500 text-base md:text-xl text-left grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div data-aos="fade-left" data-aos-duration="2000" className=' text-gray-500 text-base text-left'> 
                        <h2 className='font-semibold'>Description: </h2>
                        <p className='text-justify'>{description} </p>
                        <p className='theme-light font-medium text-base' > <span className='font-semibold text-gray-500'>Category :</span> {category} </p>
                </div>
                <div className='my-4'>
                    <p className='theme-light font-medium text-base'> <span className='font-semibold text-gray-500'>Salary Range:</span> {range} </p>
                    <p className='theme-light font-medium text-base' > <span className='font-semibold text-gray-500'>Posted on :</span> {postdate} </p>
                    <p className='theme-light font-medium text-base' > <span className='font-semibold text-gray-500'>Deadline :</span> {deadline} </p>
                    <p className='theme-light font-medium text-base' > <span className='font-semibold text-gray-500'>Posted By :</span> {username} </p>
                </div>
            </div>
            {/* <button data-aos="fade-left" data-aos-duration="3000" className='btn basic-btn mt-6 w-3/5 '>
                        <Link to='/' >Apply</Link>
                    </button> */}

                    {/*---------MODAL----------MODAL------------MODAL------- */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button  onClick={handleApply} data-aos="fade-left" data-aos-duration="3000" className='btn basic-btn mt-6 w-3/5'>Apply</button>
             <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                     <form  onSubmit={handleSubmit}>
                        {/* USER ----NAME */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input   type="text" placeholder="User Name" name="username" className="input input-bordered text-gray-400" required defaultValue={user?.displayName} />
                        </div>
                        {/* USER-----EMAIL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  type="email" placeholder="email" name="email" className="input input-bordered text-gray-400" required defaultValue={user?.email} />
                        </div>
                        {/* JOT----TITLE */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input  type="text" placeholder="Job-Title" name="job" className="input input-bordered text-gray-400" defaultValue={job} />
                        </div> */}
                        {/* CATEGORY */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input  type="text" placeholder="Category" name="category" className="input input-bordered text-gray-400" defaultValue={category} />
                        </div> */}
                        {/* SALARY RANGE */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input  type="text" placeholder="Salary Range" name="range" className="input input-bordered text-gray-400" defaultValue={range} />
                        </div> */}
                        {/* DEADLINE */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input  type="text" placeholder="Application Deadline" name="deadline" className="input input-bordered text-gray-400" defaultValue={deadline} />
                        </div> */}
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
                    <div className="">
                        <form method="dialog">
                            <button className="btn btn-primary w-full">Close</button>
                        </form>
                    </div>
                </div>
                </dialog>
            
        </div>
    );
};

export default JobDetails;