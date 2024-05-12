import React, { useEffect } from 'react';

const AllJobs = () => {
    useEffect(()=>{
        document.title = "Career Bridge | All Jobs"
    },[])
    return (
        <div>
            All Jobs Will be shown here
        </div>
    );
};

export default AllJobs;