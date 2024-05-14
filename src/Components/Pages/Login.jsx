import React, { useContext, useEffect, useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import login from '../../assets/login2.png';
import loginIcon from '../../assets/login-icon.png';
import { FaGoogle, FaGithub  } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const Login = () => {
    useEffect(()=>{
        document.title = "Career Bridge | Login"
    },[])
    //state for error in password
    const [loginError,setLoginError] = useState('');
     //state for SUCCESSFUL LOGIN
     const [success,setSuccess] = useState('');

    const {logIn,signInWithGoogle,signInWithGitHub} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
   
    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(e.currentTarget);
        console.log(form.get('email'));
        console.log(form.get('password'));

        //reset error & success
        setLoginError('');
        setSuccess('');

        logIn(email,password)
            .then(result=>
                {  
                    // console.log(result.user)

                    //code for-----JWT TOKEN------STARTS----here
                    const loggedInUser = result.user;
                    console.log(loggedInUser);
                    const user = {email};

                    // navigate(location.state? location.state : '/')

                    //code for-----JWT TOKEN
                    //get access token
                    axios.post('https://career-bridge-server.vercel.app/jwt',user,{withCredentials : true})
                    .then(res=>{
                        console.log(res.data)
                        if(res.data.success){
                            navigate(location.state? location.state : '/')
                        }
                    })
                    //jwt code ens-------HERE-------
                    setSuccess('User Created Successfully!')
                    // alert('Logged in Successfully!')
                   Swal.fire({
                        title: 'Success',
                        text: 'Logged in Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                })
            .catch(error=>{
                console.error(error)
                setLoginError(error.message)
                // alert('Please input a valid email and password ')
                Swal.fire({
                    text: 'Please input a valid email and password',
                    icon: 'warning',
                    confirmButtonText: 'Close'
                  })
            })
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithGitHub()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-5/6 mt-10 md:mt-24 border-2 border-sky-300  rounded-3xl'>
            <div className=''>
                <img className='w-full rounded-t-3xl md:rounded-l-3xl md:rounded-r-none h-full' src={login} alt="" />
            </div>
            <div className='text-left  p-10 relative'>
                {/* the LOGIN ICON */}
                <div className='absolute -top-24 md:-top-20 -right-[0px] md:-right-[400px]'>
                    <img className='rounded-full w-1/3 md:w-1/4' src={loginIcon} alt="" />
                </div>
                <div>
                    <h2 data-aos="fade-left" data-aos-duration="2000" className="text-3xl text-left my-10 theme-color animate__animated animate__fadeInLeft animate__animated animate__backInUp animate__delay-1s">Please Login</h2>
                </div>
                    <form  data-aos="fade-up" data-aos-duration="3000" onSubmit={handleLogin} className='w-full mx-auto  animate__animated animate__fadeInRight animate__animated animate__bounce animate__delay-1s'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn basic-btn text-center mt-4">Login</button>
                        </div>
                    </form>
                    <div className='text-center mt-2 font-semibold'>
                            {
                                loginError && <p className='text-red-800 '> {loginError} </p>
                            }
                            {
                                success && 
                                <div>
                                    <p className='text-green-600'>{success} </p>
                                    <ToastContainer/>
                                </div>
                            }
                    </div>
                    <p className='text-left mt-4 animate__animated animate__flash animate__animated animate__backInUp animate__delay-1s '> Do not have an Account?  <Link  className='text-cyan-500 font-bold' to="/register" >Register</Link>  </p>
                    <div className='animate__animated animate__flash animate__animated animate__fadeInUp animate__delay-2s grid grid-cols-2 w-full md:w-3/4'>
                        <p className='text-left theme-light'><button onClick={handleGoogleSignIn}  className='btn btn-ghost' > <FaGoogle></FaGoogle> Log in With Google</button></p>          
                        <p className='text-left theme-light'><button onClick={handleGitHubSignIn}  className='btn btn-ghost' > <FaGithub></FaGithub> Log in With GitHub</button></p>    
                    </div>      
            </div>
        </div>
    );
};

export default Login;