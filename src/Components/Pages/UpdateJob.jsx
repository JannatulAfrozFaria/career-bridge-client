import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2';
import update from '../../assets/update.png'
import { AuthContext } from '../AuthProvider/AuthProvider';

const UpdateJob = () => {
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | Update Job"
    },[])

    const [applicant,setApplicant] = useState(0);

    const [startDate, setStartDate] = useState(new Date());

    const {user} = useContext(AuthContext);

    const dynamicJob = useLoaderData();
    const {_id,photo, spot, description,country,location,cost,seasonality,time,visitors} = dynamicJob;
    const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const job = form.job.value;
        const description = form.description.value;
        const category = form.category.value;
        const postdate = form.postdate.value;
        const range = form.range.value;
        const deadline = form.deadline.value;
        const number = form.number.value;
        const updatedJob = {photo, job, description,category,postdate,range,deadline,number}
        console.log(updatedJob);

        //send data to the server 
        fetch(`https://career-bridge-server.vercel.app/job/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Job Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="hero bg-base-200 border rounded-3xl w-5/6 mx-auto ">
                        <div className="card-body w-full rounded-3xl flex flex-col md:flex-row gap-0 md:gap-8 shadow-2xl bg-base-100">
                            {/* IMAGE----PORTION */}
                            <div className="w-1/2 md:w-1/3" >
                                <img className='w-full h-full rounded-3xl' src={update} alt="add a job" />
                            </div>
                            <div className='w-full md:w-2/3'>
                                <form onSubmit={handleUpdate} className="">
                                {/* Title Section */}
                                <div data-aos="fade-left" data-aos-duration="2000" className="text-left mt-4">
                                    <h1 className="text-3xl font-bold text-sky-500">Update Job Details</h1>
                                    <p className="py-6 text-xl text-gray-400">You can update the job details here!</p>
                                </div>
                                {/* ---------FORM---------- */}
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            {/* PHOTO */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input type="text" placeholder="photo URL"
                                            name="photo" className="input input-bordered" required />
                                            </div>
                                            {/* JOB_TITLE */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Title</span>
                                            </label>
                                            <input type="text" placeholder="Job Title"
                                            name="job" className="input input-bordered" required />
                                            </div>
                                            {/*   JOB-----CATEGORY */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Category</span>
                                            </label>
                                            <input type="text" placeholder="Job Category"
                                            name="category" className="input input-bordered" required />
                                            </div>
                                            {/* SALARY-----RANGE */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Salary Range</span>
                                            </label>
                                            <input type="text" placeholder="Salary Range"
                                            name="range" className="input input-bordered" required />
                                            </div>
                                            {/* USER ----NAME */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">User Name</span>
                                                </label>
                                                <input type="text" placeholder="User Name"
                                                name="username" className="input input-bordered text-gray-400" required defaultValue={user.displayName} />
                                            </div>
                                            {/* USER-----EMAIL */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="email"
                                                name="email" className="input input-bordered text-gray-400" required defaultValue={user.email} />
                                            </div>
                                            {/* POSTING DATE----------- */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Posting Date</span>
                                            </label>
                                            <input type="text" placeholder="Job Posting Date"
                                            name="postdate" className="input input-bordered" required />
                                            </div>
                                            {/* DEADLINE------ */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Application Deadline</span>
                                                </label>
                                                {/* <Calendar onChange={(value)=>setSelectedDate(value)} ></Calendar> */}
                                                <DatePicker className='input input-bordered text-gray-400' name='deadline' required selected={startDate} onChange={(date) => setStartDate(date)} dateFormat ="dd/MM/yyyy" minDate={new Date()} showYearDropdown scrollableMonthYearDropdown />
                                                {/* <input type="text" placeholder="Job Posting Date"
                                                name="deadline" className="input input-bordered" required /> */}
                                            </div>
                                            
                                            {/* JOB APPLICANT'S NUMBER */}
                                            
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Job Applicant's Number</span>
                                                </label>
                                                <span className='badge bg-sky-300 p-6 text-white font-bold' > {applicant} </span>
                                                {/* <input type="text" placeholder="Job Applicant's Number"
                                                name="number" className="input input-bordered" required /> */}
                                            </div>
                                            </div>
                                        </div>
                                            



                                        {/* Input Section */}
                                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                                            {/*JOB------DESCRIPTION*/}
                                            <div className="form-control col-span-1 md:col-span-4 ">
                                                <label className="label">
                                                    <span className="label-text">Job Description</span>
                                                </label>
                                                <textarea className="textarea textarea-bordered h-[100px]" name="description" placeholder="Describe the spot . . ."></textarea>
                                            </div>
                                            
                                             
                                    </div>
                                    {/* Submit Button */}
                                    <div className="form-control mt-6">
                                        <input type="submit" value="Update" className="btn basic-btn" />
                                    </div>
                            </form>
                            </div>
                        </div>
            </div>
    );
};

export default UpdateJob;