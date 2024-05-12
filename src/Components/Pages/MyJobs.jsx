import React, { useEffect } from 'react';

const MyJobs = () => {
    useEffect(()=>{
        document.title = "Career Bridge | My Jobs"
    },[])
    return (
        <div>
            <h2>My added Jobs</h2>
        </div>
    );
};

export default MyJobs;