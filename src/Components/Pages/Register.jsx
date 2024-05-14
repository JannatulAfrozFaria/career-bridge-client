import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Result from 'postcss/lib/result';
import register from '../../assets/register2.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye,FaEyeSlash} from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Register = () => {
    //Dynamic Title
    useEffect(()=>{
        document.title = "Career Bridge | Register"
    },[])
    //state for error in password
    const [registerError,setRegisterError] = useState('');
    //state for SUCCESSFUL REGISTRATION
    const [success,setSuccess] = useState('');
    //state for password show/hide
    const [showPassword,setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo =  form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        
        console.log(email,password,name,photo);

        //reset error & success
        setRegisterError('');
        setSuccess('');

        //password validation
        if(password.length < 6){
            setRegisterError('Password must be at least 6 characters or longer');
            return;
        }
       else if (!/[A-Z]/.test(password)){
            setRegisterError('Your Password must have at least one upper case character');
            return;
        }
        else if (!/[a-z]/.test(password)){
            setRegisterError('Your Password must have at least one lower case character');
            return;
        }
       

        //create User
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            //new user has been created
            const user = {email};
            setSuccess('User Created Successfully!')
            // alert('Successfully Registered!')
            Swal.fire({
                title: 'Success',
                text: 'Successfully Registered!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            updateProfile(auth.currentUser, { displayName: name }).catch(
                (err) => console.log(err)
              );
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message);
        })
    }
    return (
        <div className="flex flex-col md:flex-row   gap-6 w-5/6 mx-auto border-2 border-sky-300 rounded-3xl">
            <div className='w-full  md:w-1/2' data-aos="fade-up" data-aos-duration="3000" >
                <img className='w-full h-full rounded-t-3xl md:rounded-l-3xl md:rounded-r-none' src={register} alt="" />
            </div>
            <div className='w-full md:w-1/2 p-12'>
                <div>
                    <h2 data-aos="fade-right" data-aos-duration="2000" className="text-3xl text-center mb-5 theme-color animate__animated animate__fadeInDown animate__animated animate__bounce animate__delay-1s ">Please Register</h2>
                </div>
                    <form data-aos="fade-up" data-aos-duration="3000"  onSubmit={handleRegister} className=' w-full animate__animated animate__fadeInRight animate__animated animate__bounce animate__delay-1s '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* password field */}
                            <div className='relative'>
                                <input 
                                    type= {showPassword? "text" : "password"}
                                    name='password' 
                                    placeholder="Password" 
                                    className="input input-bordered w-full" 
                                    required />
                                    <span className='absolute top-4 right-4' onClick={()=> setShowPassword(!showPassword)} >
                                        {
                                            showPassword? <FaEye></FaEye>
                                                        : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                            </div>
                            {/* FORGOT -------PASSWORD------ */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* REGISTER-BUTTON--------- */}
                        <div className="form-control mt-6">
                            <button className="btn basic-btn">Register</button>
                        </div>
                    </form>
                    <div className='text-center mt-2 font-semibold'>
                            {
                                registerError && <p className='text-red-800 '> {registerError} </p>
                            }
                            {
                                success && 
                                <div>
                                    <p className='text-green-600'>{success} </p>
                                    <ToastContainer/>
                                </div>
                            }
                    </div>
                    <p className='text-center mt-4 animate__animated animate__fadeInUp animate__animated animate__bounce animate__delay-2s '>Already have an Account?  
                    <Link  className='text-cyan-500 font-bold ml-4' to="/login" >Login</Link>
                    </p>          
            </div>
        </div>
    );
};

export default Register;