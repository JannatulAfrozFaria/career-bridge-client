import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import MyJob from "../../../src/MyJobsAnimate.json";

const MyJobs = () => {
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | My Jobs"
    },[])

    const {user} = useContext(AuthContext);

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch(`https://career-bridge-server.vercel.app/myJobs/${user?.email}`)
        .then (res=>res.json())
        .then(data=>{
            setJobs(data);
        })
    },[user])

    //DELETE FUNCTION
    const handleDelete = (_id) =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://career-bridge-server.vercel.app/job/${_id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                       Swal.fire({
                            title: "Deleted!",
                            text: "Your Selected Job has been deleted.",
                            icon: "success"
                          });
                          const remainingJobs = jobs.filter( job=> job._id !== _id);
                          setJobs(remainingJobs);
                    }
                })
            }
          });
    }

    return (
        <div className='mx-auto w-5/6'>
            <div>
                <div className='text-left'>
                    <h3 className="text-2xl md:text-3xl mt-12 text-sky-500  ">Watch Jobs added by You!</h3>
                    <h2 className="text-base md:text-xl text-gray-500 mt-4 mb-8">There are about {jobs.length} Jobs listed till Now. You can add more! </h2>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row ">
                {/* the LIST OF ALL SPOTS */}
                <div data-aos="fade-up" data-aos-duration="3000 w-2/3" >
                    <table className="table">
                            <thead className='mx-0 text-center'>
                            <tr>
                                {/* <th className='hidden md:flex'>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Job Title</th>
                                <th>Category</th>
                                <th className="hidden md:flex flex-row gap-20 items-start justify-start">
                                    <h2>Salary Range</h2>
                                    {/* <h2>Job Posting Date</h2> */}
                                    <h2>Application Deadline</h2>
                                </th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody  className='text-gray-500'>
                                {
                                    jobs.map(jb=>  <tr key={jb._id}>
                                        {/* <th  className='hidden md:flex'>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th> */}
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar hidden md:flex">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={jb.photo} />
                                                </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold"> {jb.job} </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {jb.category}
                                            <br/>
                                        </td>
                                        <td className="hidden md:flex flex-row gap-16 ">
                                            <h2>{jb.range}</h2>
                                            {/* <h2>{jb.postdate}</h2> */}
                                            <h2>{jb.deadline}</h2>
                                        </td>
                                        <th>
                                            <Link to={`/updateJob/${jb._id}`}>
                                                    <button className="btn basic-btn btn-sm">Update</button>
                                            </Link>
                                            <button onClick={()=>handleDelete(jb._id)} className="btn text-white bg-orange-400 btn-sm font-bold flex mt-2 md:m-0 md:hidden ">Delete</button>
                                        </th>
                                        <th className='hidden md:flex'>
                                            <button onClick={()=>handleDelete(jb._id)} className="btn text-white bg-orange-400 btn-sm font-bold mt-2">Delete</button>
                                        </th>
                                    </tr> )
                                }
                            </tbody>
                        </table>
                </div>
                 {/* LOTTIE------ */}
                 <div  className='w-5/6 md:w-1/3 mx-auto' >
                        <Lottie className='w-full mx-auto' animationData={MyJob} />
                </div>
            </div>
        </div>
    );
};

export default MyJobs;