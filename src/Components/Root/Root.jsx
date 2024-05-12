import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className='mx-auto w-[1280px]'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;