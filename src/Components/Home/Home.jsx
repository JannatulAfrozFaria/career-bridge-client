import React, { useEffect } from 'react';
import Banner from './Banner';
import JobByCategory from './JobByCategory';
import StartingSection from './StartingSection';
import ConnectSection from './ConnectSection';

const Home = () => {
    useEffect(()=>{
        document.title = "Career Bridge | Home"
    },[])
    return (
        <div>
            <Banner data-aos="fade-left" data-aos-duration="2000" ></Banner>
            <JobByCategory></JobByCategory>
            <StartingSection></StartingSection>
            <ConnectSection></ConnectSection>
        </div>
    );
};

export default Home;