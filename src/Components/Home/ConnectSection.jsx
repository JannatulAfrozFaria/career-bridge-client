import React from 'react';
import connect from '../../assets/connect4.png'
import option from '../../assets/option.png'
import newJob from '../../assets/newjob2.png'

const ConnectSection = () => {
    return (
       <div className='my-24 w-5/6 mx-auto'>
            <h2 data-aos="fade-right" data-aos-duration="2000"  className="text-4xl font-bold text-sky-500 text-center w-full mx-auto mb-8">Our Procedure of Establishing Connectivity</h2>
            <p data-aos="fade-left" data-aos-duration="3000" className='sm:text-base lg:text-lg mt-3  w-full text-gray-400 text-center mx-auto mb-8 md:mb-12'> From initial engagement to interview scheduling, we prioritize seamless communication and efficient interactions. Through our user-friendly platform, we facilitate networking opportunities, ensuring candidates and employers can connect effortlessly. Whether it's submitting applications or arranging interviews, our streamlined approach ensures a smooth and effective recruitment experience for all parties involved. We outline our streamlined process for connecting job seekers with employers, ensuring efficient communication and seamless interactions throughout the hiring journey.</p>
            <div data-aos="fade-up" data-aos-duration="3000" className='flex flex-col md:flex-row gap-6 w-full h-full'>
                {/* CARD--------1 */}
                <div className="card1 bg-white shadow-xl rounded-3xl p-6 md:p-12">
                        <div className='w-1/2 mb-6'>
                            <img className='w-full' src={connect} alt="" />
                        </div>
                        <h2 className=" sm:text-base lg:text-2xl w-full lg:w-4/5 text-left text-gray-500 font-semibold">We Connect You</h2>
                        <p className='sm:text-base lg:text-lg mt-3  w-full lg:w-5/6 text-gray-400 text-left '>With positions in your area based on your interest. Once you sign up with us, you obtain the connections you need to succeed.</p>
                </div>
                {/* CARD--------2 */}
                <div className="card1 bg-cyan-600 shadow-xl rounded-3xl p-6 md:p-12">
                        <div className=' w-1/2 mb-8'>
                            <img className='w-full' src={option} alt="" />
                        </div>
                        <h2 className=" sm:text-base lg:text-2xl w-full lg:w-4/5 text-left text-white font-semibold">Weigh Your Options</h2>
                        <p className='sm:text-base lg:text-lg mt-3  w-full lg:w-5/6 text-gray-200 text-left '>We will provide multiple positions for your considerations, so you don't have to select a career that isn't right for you.</p>
                </div>
                {/* CARD--------3 */}
                <div className="card1 bg-white shadow-xl rounded-3xl p-6 md:p-12">
                        <div className='w-1/2 mb-6'>
                            <img className='w-full' src={newJob} alt="" />
                        </div>
                        <h2 className=" sm:text-base lg:text-2xl w-full lg:w-4/5 text-left text-gray-500 font-semibold">Your New Job Awaits</h2>
                        <p className='sm:text-base lg:text-lg mt-3  w-full lg:w-5/6 text-gray-400 text-left '>We give you the connection to a new job of your choice. With our help, a successful career is right there for you waiting!</p>
                </div>
            </div>
       </div>
    );
};

export default ConnectSection;