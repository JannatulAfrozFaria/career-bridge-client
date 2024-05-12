import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import add from '../../assets/start2.png'

const AddAJob = () => {
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | Add a Job"
    },[])

    const {user} = useContext(AuthContext);
    const handleAdd = (event) =>{
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
        const username = form.username.value;
        const email = user.email;
        const newJob = {photo, job, description,category,postdate,range,deadline,number,username,email}
        console.log(newJob);

        //send data to the server 
        fetch('http://localhost:5000/job',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'New Job Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
            <div className="hero bg-base-200 border rounded-3xl w-5/6 mx-auto">
                        <div className="card-body w-full rounded-3xl flex flex-row gap-8 shadow-2xl bg-base-100">
                            {/* IMAGE----PORTION */}
                            <div className="" >
                                <img className='w-full h-full rounded-3xl' src={add} alt="add a job" />
                            </div>
                            <div>
                                <form onSubmit={handleAdd} className="">
                                {/* Title Section */}
                                <div data-aos="fade-left" data-aos-duration="2000" className="text-left mt-4">
                                    <h1 className="text-3xl font-bold text-sky-500">Add A New Job!</h1>
                                    <p className="py-6 text-xl text-gray-400">You can add a new job of any category here!</p>
                                </div>
                                {/* ---------FORM---------- */}
                                <div data-aos="fade-up" data-aos-duration="3000">
                                        {/* Input Section */}
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                            {/* PHOTO */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input type="text" placeholder="photo URL"
                                            name="photo" className="input input-bordered" required />
                                            </div>
                                            {/* SPOT_NAME */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Title</span>
                                            </label>
                                            <input type="text" placeholder="Job Title"
                                            name="job" className="input input-bordered" required />
                                            </div>
                                            {/*SHORT------DESCRIPTION*/}
                                            <div className="form-control col-span-1 md:col-span-2 ">
                                                <label className="label">
                                                    <span className="label-text">Job Description</span>
                                                </label>
                                                <textarea className="textarea textarea-bordered h-[236px]" name="description" placeholder="Describe the spot . . ."></textarea>
                                            </div>
                                        </div>
                                        {/* -------------------------------------------------------- */}
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                            {/*   COUNTRY-----NAME */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Category</span>
                                            </label>
                                            <input type="text" placeholder="Job Category"
                                            name="category" className="input input-bordered" required />
                                            </div>
                                            {/* LOCATION------- */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Posting Date</span>
                                            </label>
                                            <input type="text" placeholder="Job Posting Date"
                                            name="postdate" className="input input-bordered" required />
                                            </div>
                                            
                                            {/* AVERAGE----COST */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Salary Range</span>
                                            </label>
                                            <input type="text" placeholder="Salary Range"
                                            name="range" className="input input-bordered" required />
                                            </div>
                                            {/* SEASONALITY------ */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Application Deadline</span>
                                            </label>
                                            <input type="text" placeholder="Job Posting Date"
                                            name="deadline" className="input input-bordered" required />
                                            </div>
                                            {/* TRAVEL-----TIME */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Job Applicant's Number</span>
                                            </label>
                                            <input type="text" placeholder="Job Applicant's Number"
                                            name="number" className="input input-bordered" required />
                                            </div>
                                            </div>
                                            {/* USER ----NAME */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">User Name</span>
                                            </label>
                                            <input type="text" placeholder="User Name"
                                            name="username" className="input input-bordered" required />
                                            </div>
                                            {/* USER-----EMAIL */}
                                            <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email"
                                            name="email" className="input input-bordered" required />
                                            </div>
                                        </div>
                                        {/* ------------------------------------ */}
                                    </div>
                                    {/* Submit Button */}
                                    <div className="form-control mt-6">
                                        <input type="submit" value="Add" className="btn basic-btn" />
                                    </div>
                                
                            </form>
                            </div>
                        </div>
            </div>
        
    );
};

export default AddAJob;