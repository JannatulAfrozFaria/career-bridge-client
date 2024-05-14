import React, { useContext, useEffect, useState } from 'react';
import Lottie from "lottie-react";
import AppliedJob from "../../../src/AppliedJobs.json";
import { AuthContext } from '../AuthProvider/AuthProvider';

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';


const AppliedJobs = () => {
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | Applied Jobs"
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

    
    return (
        <div className='mx-auto w-5/6'>
        <div>
            <div className='text-left'>
                <h3 className="text-2xl md:text-3xl mt-12 text-sky-500  ">Watch Jobs You have Applied on!</h3>
                <h2 className="text-base md:text-xl text-gray-500 mt-4 mb-8">Till now you have applied in {jobs.length} Jobs. You can apply to more jobs! </h2>
            </div>
        </div>
        <div className="flex flex-col md:flex-row ">
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
                                    <td className="hidden md:flex flex-row gap-16 items-end ">
                                        <h2>{jb.range}</h2>
                                        <h2>{jb.deadline}</h2>
                                    </td>
                                            {/* --------DOWNLOAD BTN ------ */}
                                    <th>
                                        <PDFDownloadLink document={<MyDocument />}       fileName="Application_Summary.pdf" className='btn basic-btn btn-sm'>
                                            {({ blob, url, loading, error }) =>
                                                loading ? 'Loading document...' : 'Download Summary'
                                            }
                                        </PDFDownloadLink>
                                    </th>
                                </tr> )
                            }
                        </tbody>
                    </table>
            </div>
             {/* LOTTIE------ */}
             <div  className='w-1/3' >
                    <Lottie className='w-full mx-auto' animationData={AppliedJob} />
            </div>
        </div>
        {/* --------PDF------- */}
        {/* <div>
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
            <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
                {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download Summary'
                        }
            </PDFDownloadLink>
        </div> */}
    </div>
    );
};

export default AppliedJobs;