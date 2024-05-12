import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/404_page_cover.jpg'

const ErrorPage = () => {
   useEffect(()=>{
        document.title = "Error"
    },[])
    return (
        <div className="text-center mt-8 text-gray-500 ">
            <div className='mx-auto w-5/6'>
                <img className='mx-auto w-1/2 my-5 rounded-full' src={error} alt="" />
            </div>
            <h2 className='text-3xl mt-6'>The URL is not Correct</h2>
            <button className="btn basic-btn my-6"><Link to={'/'} >Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;