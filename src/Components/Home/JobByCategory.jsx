import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const JobByCategory = () => {
    const [categories,setCategories] = useState(null);
    const [filteredCategory,setFilteredCategory] = useState(categories);


    const handleFilter= (category) =>{
        const filteredJobs = categories.filter(item=> {
           
            if(category && item.category === category){
                return item;
            }
            else if(!category){
                return item;
            }
            // return item;
        })
        setFilteredCategory(filteredJobs);
        console.log(filteredJobs)
    }
    console.log(filteredCategory);

    // useEffect(()=>{
    //     fetch('https://career-bridge-server.vercel.app/job')
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         console.log(data)
    //         setCategories(data);
    //         setFilteredCategory(data);
    //     })
    // },[])

     //USING AXIOS------//-------FOR----FETCHING----//
     const url = 'https://career-bridge-server.vercel.app/job';
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setCategories(res.data);
            setFilteredCategory(res.data);
        })
    },[url])


    return (
        <div className="text-center w-full md:w-4/5 mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 text-sky-500">Job By Category</h2>
            {/* <h2 data-aos="fade-left" data-aos-duration="3000" className=" sm:text-base lg:text-lg my-5 lg:my-10  text-gray-400">All Categories of Jobs Are Shown Here. </h2> */}
            <div >
            <Tabs className={ 'text-gray-400 w-5/6 md:w-full mx-auto'}>
                <TabList>
                    <Tab onClick={()=>handleFilter('')} >All Jobs</Tab>
                    <Tab onClick={()=>handleFilter('On-Site')}>On-Site Jobs</Tab>
                    <Tab onClick={()=>handleFilter('Remote')}>Remote Jobs</Tab>
                    <Tab onClick={()=>handleFilter('Hybrid')}>Hybrid Jobs</Tab>
                    <Tab onClick={()=>handleFilter('Part-Time')}>Part Time Jobs</Tab>
                </TabList>
                <TabPanel className={''} >
                        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                            {filteredCategory && filteredCategory.map(category=>
                                <div key={category._id} className="card bg-base-100 shadow-xl">
                                    <figure><img src={category.photo} alt="Category" /></figure>
                                <div className="card-body">
                                <h2 className="card-title theme-color mt-4 md:mt-0 text-3xl">{category.job} </h2>
                                <p className='mt-6 text-left text-xl text-gray-400 font-bold'>Category: {category.category} </p>
                                <p className=' text-left text-xl text-gray-400 font-bold'>Posted By: {category.username} </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 text-gray-400 font-bold'>
                                    <p className='my-2 text-left'>Salary Range: <br />{category.range} </p>
                                    <p className='my-2 text-left'>Job Posting Date: <br />te: {category.postdate} </p>
                                    <p className='my-2 text-left'>Application Deadline: <br />{category.deadline} </p>
                                    <p className='my-2 text-left'>Job Applicants<br /> Number{category.number} </p>
                                </div>
                                <div className="card-actions justify-center w-full">
                                    <Link className='w-full' to={`/job/${category._id}`}><button className="btn basic-btn w-full">View details</button></Link>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                </TabPanel>
                <TabPanel>
                        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                            {filteredCategory && filteredCategory.map(category=>
                                <div key={category._id} className="card bg-base-100 shadow-xl">
                                    <figure><img src={category.photo} alt="Category" /></figure>
                                <div className="card-body">
                                <h2 className="card-title theme-color mt-4 md:mt-0 text-3xl">{category.job} </h2>
                                <p className='mt-6 text-left text-xl text-gray-400 font-bold'>Category: {category.category} </p>
                                <p className=' text-left text-xl text-gray-400 font-bold'>Posted By: {category.username} </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 text-gray-400 font-bold'>
                                    <p className='my-2 text-left'>Salary Range: <br />{category.range} </p>
                                    <p className='my-2 text-left'>Job Posting Date: <br />te: {category.postdate} </p>
                                    <p className='my-2 text-left'>Application Deadline: <br />{category.deadline} </p>
                                    <p className='my-2 text-left'>Job Applicants<br /> Number{category.number} </p>
                                </div>
                                <div className="card-actions justify-center w-full">
                                    <Link className='w-full' to={`/job/${category._id}`}><button className="btn basic-btn w-full">View details</button></Link>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                </TabPanel>
                <TabPanel>
                        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                            {filteredCategory && filteredCategory.map(category=>
                                <div key={category._id} className="card bg-base-100 shadow-xl">
                                    <figure><img src={category.photo} alt="Category" /></figure>
                                <div className="card-body">
                                <h2 className="card-title theme-color mt-4 md:mt-0 text-3xl">{category.job} </h2>
                                <p className='mt-6 text-left text-xl text-gray-400 font-bold'>Category: {category.category} </p>
                                <p className=' text-left text-xl text-gray-400 font-bold'>Posted By: {category.username} </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 text-gray-400 font-bold'>
                                    <p className='my-2 text-left'>Salary Range: <br />{category.range} </p>
                                    <p className='my-2 text-left'>Job Posting Date: <br />te: {category.postdate} </p>
                                    <p className='my-2 text-left'>Application Deadline: <br />{category.deadline} </p>
                                    <p className='my-2 text-left'>Job Applicants<br /> Number{category.number} </p>
                                </div>
                                <div className="card-actions justify-center w-full">
                                    <Link className='w-full' to={`/job/${category._id}`}><button className="btn basic-btn w-full">View details</button></Link>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                </TabPanel>
                <TabPanel>
                        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                            {filteredCategory && filteredCategory.map(category=>
                                <div key={category._id} className="card bg-base-100 shadow-xl">
                                    <figure><img src={category.photo} alt="Category" /></figure>
                                <div className="card-body">
                                <h2 className="card-title theme-color mt-4 md:mt-0 text-3xl">{category.job} </h2>
                                <p className='mt-6 text-left text-xl text-gray-400 font-bold'>Category: {category.category} </p>
                                <p className=' text-left text-xl text-gray-400 font-bold'>Posted By: {category.username} </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 text-gray-400 font-bold'>
                                    <p className='my-2 text-left'>Salary Range: <br />{category.range} </p>
                                    <p className='my-2 text-left'>Job Posting Date: <br />te: {category.postdate} </p>
                                    <p className='my-2 text-left'>Application Deadline: <br />{category.deadline} </p>
                                    <p className='my-2 text-left'>Job Applicants<br /> Number{category.number} </p>
                                </div>
                                <div className="card-actions justify-center w-full">
                                    <Link className='w-full' to={`/job/${category._id}`}><button className="btn basic-btn w-full">View details</button></Link>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                </TabPanel>
                <TabPanel>
                        <div data-aos="fade-up" data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'>
                            {filteredCategory && filteredCategory.map(category=>
                                <div key={category._id} className="card bg-base-100 shadow-xl">
                                    <figure><img src={category.photo} alt="Category" /></figure>
                                <div className="card-body">
                                <h2 className="card-title theme-color mt-4 md:mt-0 text-3xl">{category.job} </h2>
                                <p className='mt-6 text-left text-xl text-gray-400 font-bold'>Category: {category.category} </p>
                                <p className=' text-left text-xl text-gray-400 font-bold'>Posted By: {category.username} </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 text-gray-400 font-bold'>
                                    <p className='my-2 text-left'>Salary Range: <br />{category.range} </p>
                                    <p className='my-2 text-left'>Job Posting Date: <br />te: {category.postdate} </p>
                                    <p className='my-2 text-left'>Application Deadline: <br />{category.deadline} </p>
                                    <p className='my-2 text-left'>Job Applicants<br /> Number{category.number} </p>
                                </div>
                                <div className="card-actions justify-center w-full">
                                    <Link className='w-full' to={`/job/${category._id}`}><button className="btn basic-btn w-full">View details</button></Link>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                </TabPanel>
                
            </Tabs>
            </div>
        </div>
    );
};

export default JobByCategory;