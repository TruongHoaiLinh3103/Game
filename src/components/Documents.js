import React from 'react';
import { useLocation } from 'react-router-dom';
import { FRONT } from '../story/FRONT';
import { BACK } from '../story/BACK';
import "../styles/document.scss";

const Documents = () => {
    const path = useLocation();
    return (
        <div className='Documents'>
            {path.pathname === "/front" && 
                <div className='Documents-list'>
                   {FRONT.map((item) => {
                    return(
                        <a href={item.link}>{item.name}</a>
                    )
                   })}
                </div>
            }
            {path.pathname === "/back" &&
                <div className='Documents-list'>
                    {BACK.map((item) => {
                        return(
                            <a href={item.link}>{item.name}</a>
                        )
                    })}
                </div>
            }
        </div>
    );
};

export default Documents;