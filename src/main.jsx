import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/Pages/ErrorPage.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';
import Blogs from './Components/Pages/Blogs.jsx';
import MyJobs from './Components/Pages/MyJobs.jsx';
import AllJobs from './Components/Pages/AllJobs.jsx';
import AddAJob from './Components/Pages/AddAJob.jsx';
import AppliedJobs from './Components/Pages/AppliedJobs.jsx';
import PrivateRoute from './Components/Pages/PrivateRoute.jsx';
import JobDetails from './Components/Pages/JobDetails.jsx';
import UpdateJob from './Components/Pages/UpdateJob.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>,
        loader: () =>fetch('http://localhost:5000/job')
      },
      {
        path: 'job/:id',
        element: <PrivateRoute>
                    <JobDetails></JobDetails>
                 </PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: '/addJob',
        element: <PrivateRoute>
                      <AddAJob></AddAJob>
                 </PrivateRoute>
      },
      {
        path: '/appliedJobs',
        element: <PrivateRoute>
                   <AppliedJobs></AppliedJobs>
                 </PrivateRoute>
      },
      {
        path: '/myJobs',
        element: <PrivateRoute>
                    <MyJobs></MyJobs>
                 </PrivateRoute>
      },
      {
        path: 'updateJob/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
