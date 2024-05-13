import React from 'react';
//framer motion
import {motion} from 'framer-motion';
//variants
import {fadeIn, fadeLeft, fadeRight} from './variants'

import start from '../../assets/start4.png'
import { Link } from 'react-router-dom';

const StartingSection = () => {
    return (
        <div className="text-center mx-10 w-5/6 md:mx-auto">
            <div className="flex flex-col md:flex-row gap-8 ">
                <motion.div 
                variants={fadeRight("right", 0.2)} initial= "hidden" whileInView={"show"} viewport={{once:false,amount: 0.3}} 
                className='w-full md:w-1/2'>
                        <img className='w-full h-full rounded-3xl' src={start} alt="" />
                </motion.div>
                 <motion.div 
                 variants={fadeLeft("left", 0.2)} initial= "hidden" whileInView={"show"} viewport={{once:false,amount: 0.3}} 
                  className='w-full md:w-1/2'>
                    <h2  className="text-4xl font-bold my-7 md:my-7 lg:my-10 text-sky-500 text-left">How We Started</h2>
                    <h2 className=" sm:text-base lg:text-2xl my-5 lg:my-10 w-full lg:w-4/5 text-left text-gray-500 font-semibold">We Began our Service with <span className='text-blue-400' >Job-Seekers in Mind...</span></h2>
                    <h2 className=" sm:text-base lg:text-lg mt-5 lg:my-10 w-full lg:w-4/5 text-gray-400 text-left ">At our core, we're driven by a singular mission: to empower job-seekers in their career journeys. From the very outset, we envisioned a platform that prioritizes the needs, aspirations, and challenges of individuals navigating the job market. Our commitment to this vision shapes every aspect of our service, from the user experience to the resources we provide. <br />Whether you're embarking on your first job search, seeking a career change, or aiming for professional advancement, we're here to be your steadfast companion. With a blend of cutting-edge technology and human-centric support, we strive to make your job-seeking journey smoother, more rewarding, and ultimately successful.<br />Join us as we redefine what it means to empower job-seekers. Together, let's unlock endless possibilities and chart a course towards fulfilling careers.</h2>
                    <div className='w-full text-left'>
                        <Link to='/register' ><button className='btn basic-btn w-1/2 md:w-1/5 rounded-xl  mt-4 md:mt-0'>Join Us!</button></Link>
                    </div>
                 </motion.div>
            </div>
        </div>
    );
};

export default StartingSection;