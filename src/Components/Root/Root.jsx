import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import ThemeToggle from '../Shared/ThemeToggle';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ThemeToggle></ThemeToggle>
            <Outlet className='mx-auto w-[1280px]'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;