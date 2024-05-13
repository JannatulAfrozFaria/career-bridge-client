import React, { useEffect } from 'react';
import query from '../../assets/query.png'

const Blogs = () => {
    useEffect(()=>{
        document.title = "Career Bridge | Blogs"
    },[])
    return (
        <div className="text-center mx-10 md:mx-auto lg:mx-auto">
            <h2 data-aos="fade-left" data-aos-duration="2000" className="text-4xl font-bold my-7 md:my-7 lg:my-10 text-sky-500">Queries</h2>
            <h2 data-aos="fade-left" data-aos-duration="3000"className=" sm:text-base lg:text-lg my-5 lg:my-10 w-full lg:w-4/5 mx-auto text-gray-400">Unlock the answers to your burning questions about job hunting, resume writing, interview tips, and more! Our queries section is your one-stop destination for expert advice and insights from seasoned professionals. Whether you're a recent graduate or a seasoned professional, we're here to provide guidance and support every step of the way. Explore, learn, and excel in your career journey with us!</h2>
            {/* IMAGE-------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 w-4/5 mx-auto">
                <div data-aos="fade-up" data-aos-duration="3000" className='col-span-1'>
                    <img className='h-full w-full' src={query} alt="" />
                </div>
                <div className='col-span-2'>
                            {/* QUESTION N0-----------1 */}
                        <div data-aos="fade-up" data-aos-duration="3000">
                                <div className="text-justify">
                                    <h1 className='text-xl font-bold text-left theme-color'> What is an access token and refresh token? How do they work and where should we store them on the client side?</h1>
                                    <div className='flex gap-8'>
                                        <div data-aos="fade-up" data-aos-duration="3000">
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>Access Token : <br /> </span>An access token is a credential that represents the authorization granted to the client to access specific resources. It typically has a limited lifespan, often ranging from a few minutes to a few hours.</p>
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>Refresh Token : <br /></span>
                                            A refresh token is a credential used to obtain a new access token when the current access token expires. Unlike access tokens, refresh tokens are long-lived and remain valid for a longer period.</p>
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration="3000">
                                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>How Access Token And Refresh Token Work : <br /></span>
                                            Access tokens are used by the client to authenticate itself when making requests to access protected resources on the server.They are usually included in the request headers of API calls to authenticate the client.</p>
                                            <p className='text-left text-gray-400 w-full'>When the client's access token expires, it can use the refresh token to request a new access token from the authorization server without requiring the user to re-authenticate. Refresh tokens are more sensitive and valuable than access tokens because they can be used to obtain new access tokens, so they should be securely stored.</p>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-justify text-gray-400 w-full'><span className='font-bold text-sky-400'>Where Should we store Access and Refresh Token : <br /></span>
                                        Access Tokens: These should be stored in memory (e.g., in memory variables) or in a secure storage mechanism such as browser sessionStorage or localStorage for web applications, or in secure storage for mobile applications. They should not be stored in cookies due to security risks. br  Refresh Tokens: These should be stored in a more secure manner than access tokens. They should never be accessible from client-side code such as JavaScript. Typically, they are securely stored on the server side, and the client receives and sends them via secure mechanisms like HTTP-only cookies or through secure communication channels. <br />
                                        Storing access and refresh tokens securely is crucial to prevent unauthorized access to protected resources and to mitigate the risk of token theft or misuse.</p>
                                    </div>
                                </div>
                        </div>
                            {/*     QUESTION NO----------2 */}
                        {/* <div data-aos="fade-up" data-aos-duration="3000">
                                <h1 className='text-xl font-bold text-left w-full theme-color mt-6'> What is express js? What is Nest JS ?</h1>
                        </div> */}
                        {/* <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>Express.js </span>
                             is a minimalist web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications, such as routing, middleware support, templating engines, and more. Express.js is highly flexible and lightweight, making it a popular choice for developers who want to quickly build scalable and efficient server-side applications in JavaScript. <br />
                             <span className='font-bold text-sky-400'>NestJS</span>, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and heavily inspired by Angular, which means it embraces the same architectural concepts such as modules, controllers, services, and dependency injection. NestJS provides a structured and organized approach to building applications, making it easy to manage complex codebases and facilitate team collaboration. It also comes with built-in support for TypeScript, which adds static typing and other advanced features to JavaScript, enhancing developer productivity and code maintainability. Overall, NestJS is suitable for building enterprise-grade applications and APIs with ease.</p>
                        </div> */}
                            {/*     QUESTION NO----------3 */}
                        {/* <div data-aos="fade-up" data-aos-duration="3000">
                                <h1 className='text-xl font-bold text-left w-full theme-color mt-6'> Explanation of Code </h1>
                        </div> */}
                        {/* <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-left text-gray-400 w-full'>Here is the Answer</p>
                        </div> */}
                </div>
            </div>
            <div className='grid grid-cols-1 w-5/6 mx-auto'>
                    {/*     QUESTION NO----------2 */}
                    <div data-aos="fade-up" data-aos-duration="3000">
                                <h1 className='text-xl font-bold text-left w-full theme-color mt-6'> What is express js? What is Nest JS ?</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-left text-gray-400 w-full'><span className='font-bold text-sky-400'>Express.js </span>
                             is a minimalist web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications, such as routing, middleware support, templating engines, and more. Express.js is highly flexible and lightweight, making it a popular choice for developers who want to quickly build scalable and efficient server-side applications in JavaScript. <br />
                             <span className='font-bold text-sky-400'>NestJS</span>, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and heavily inspired by Angular, which means it embraces the same architectural concepts such as modules, controllers, services, and dependency injection. NestJS provides a structured and organized approach to building applications, making it easy to manage complex codebases and facilitate team collaboration. It also comes with built-in support for TypeScript, which adds static typing and other advanced features to JavaScript, enhancing developer productivity and code maintainability. Overall, NestJS is suitable for building enterprise-grade applications and APIs with ease.</p>
                        </div>
                            {/*     QUESTION NO----------3 */}
                        <div data-aos="fade-up" data-aos-duration="3000">
                                <h1 className='text-xl font-bold text-left w-full theme-color mt-6'> Explanation of Code </h1>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <p className='text-justify text-gray-400 w-full'>In this Site, I have implemented Dynamic Title Feature for Every Single Route using the UseEffect Hook of React. The Wesite Icon has been changed by replacing the default href of icon Link in the index.html file. For creating live link of image, postimages.org has been used. For Animation, Lottie React, AOS package, Framer-motion etc have been used in various pages. 
                            In the "How we Started" Section of Home Page, Framer-Motion has been used to create motion effect.
                            In this Particular Route, I have used Tailwind and Daisy UI for the Design Portion. I have utilized the grid Layout Property for organizing the answers properly. <br />
                            For Routing, I have used React Router Dom. I have created a Private Route Component for Controlling the access in certain routes. 
                            For Deployment of client side, Firebase has been used as the deployment platform. On the other hand, Vercel has been used for deployment of Client Side. 
                            For Storing Various Data, MongoDB has been used as a server side Database. All the data is being stored in MongoDB and being rendered from specific data collection created in MongoDB when needed. In the BackEnd/Server Side, create, read, update, delete -all of these operations have been executed. The AuthProvider Component has been created to implement the Login and Register Process with Firebase Authentication. 
                            The Environment Variables have been used to hide the Firebase config data and MongoDB Credentials.
                              </p>
                        </div>
                </div>
        </div>
    );
};

export default Blogs;