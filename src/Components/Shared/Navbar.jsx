import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import logo from '../../../src/assets/logo2.png';
import profilePhoto from '../../assets/user.png';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'; 
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    

    //for updateSpots
    // const loadedSpots = useLoaderData();
    // const[spots,setSpots] = useState(loadedSpots);

    const {user,logOut} = useContext(AuthContext);


    //state for changing theme
    const [theme,setTheme]= useState('pastel');
    //Changing the Theme
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])


    const handleTheme = (e) =>{
        if(e.target.checked){
            setTheme('halloween')
        }
        else{
            setTheme('pastel')
        }
    }

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch(error=>console.error(error))
    }
    const Links = <>
        <li> <NavLink to='/'  >Home</NavLink> </li>
        <li> <NavLink to='/allJobs'>All Jobs</NavLink> </li>
        <li> <NavLink to='/appliedJobs' >Applied Jobs</NavLink> </li>
        <li> <NavLink to='/addJob' >Add A Job</NavLink> </li>
        <li> <NavLink to='/myJobs' >My Jobs</NavLink> </li>
        <li> <NavLink to='/blogs' >Blogs</NavLink> </li>
        <li> <NavLink to='/register' >Register</NavLink> </li>
    </>
    
    return (
        <div  className="navbar bg-base-100 mb-5 shadow-lg  rounded-lg mt-5 px-4 md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav_text">
                    {Links}
                </ul>
                </div>
                {/* LOGO------- */}
                <div className='w-1/6 border-2 border-cyan-500 rounded-full hidden md:flex lg:flex'>
                    <img src={logo} alt="logo" />
                </div>
                <a className="btn btn-ghost text-left text-base md:text-xl lg:text-xl theme-color">CAREER BRIDGE</a>
                 {/* THEME------CHANGE------BUTTON */}
                 <label className="cursor-pointer hidden md:grid place-items-center">
                    <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-[#2D89B7] row-start-1 col-start-1 col-span-2"/>
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 nav_text">
                    {Links}
                </ul>
               
            </div>
            <div className="navbar-end ">
                {/* LOGIN / LOGOUT BUTTON */}
                {
                    user ? <div className='flex item-center gap-1'>
                                <label tabIndex={0} className='btn btn-ghost btn-circle avatar hidden md:flex'>
                                    <Tippy content={auth.currentUser.displayName} >
                                        <div className=" profile-pic w-10 rounded-full ">
                                            <img src={profilePhoto} alt="profile photo" />
                                        </div>
                                    </Tippy>
                                </label>
                                <button onClick={handleSignOut}  className="btn theme-color">Log Out</button> 
                            </div>
                    
                    : <Link to="/login" >
                        <button className="btn theme-color">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};


export default Navbar;