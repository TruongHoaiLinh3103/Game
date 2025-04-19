import React from 'react';
import "../styles/home.scss";
import Timer from './Timer';
import Body from "./Body";
import Clock from "./Clock"

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home-body'>
                <Body/>
                <Timer/>
            </div>
            <Clock/>
        </div>
    );
};

export default Home;