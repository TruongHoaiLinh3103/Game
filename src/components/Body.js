import React from 'react';
import "../styles/body.scss";
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const router = useNavigate();
    return (
        <div className='Body'>
            <div className='Body-c'>
                <div className='Body-Image'>
                    <div className="card" onClick={() => router("/sport/kungfu")}>
                        <svg height="100%" width="100%" className="border" xmlns="http://www.w3.org/2000/svg">
                            <line y2="0" x2="600" y1="0" x1="0" className="top"></line>
                            <line y2="-960" x2="0" y1="320" x1="0" className="left"></line>
                            <line y2="320" x2="-600" y1="320" x1="200" className="bottom"></line>
                            <line y2="960" x2="200" y1="0" x1="200" className="right"></line>
                        </svg>
                        <div className="logo">
                            <img src='https://i.pinimg.com/736x/63/3b/d0/633bd029ac31dba8c6dcfade27aa4138.jpg' alt='Body'/>
                        </div>  
                    </div>
                    <div className="card" onClick={() => router("/sport/cordage")}>
                        <svg height="100%" width="100%" className="border" xmlns="http://www.w3.org/2000/svg">
                            <line y2="0" x2="600" y1="0" x1="0" className="top"></line>
                            <line y2="-960" x2="0" y1="320" x1="0" className="left"></line>
                            <line y2="320" x2="-600" y1="320" x1="200" className="bottom"></line>
                            <line y2="960" x2="200" y1="0" x1="200" className="right"></line>
                        </svg>
                        <div className="logo">
                            <img src='https://i.pinimg.com/736x/e3/a0/cf/e3a0cfa59482e555353d370a09f6fdb9.jpg' alt='Cordage'/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
