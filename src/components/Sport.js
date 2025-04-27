import React from 'react';
import "../styles/sport.scss";
import { BODY } from '../story/BODY';
import { CORDAGE } from '../story/CORDAGE';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { EDIT_CORDAGE, EDIT_BODY, EDIT_MIU } from '../redux/reducer/rootSport'

const Sport = () => {
    const router = useNavigate();
    const dispatch = useDispatch();
    const Body = useSelector((state) => state.sport.Body);
    const Cordage = useSelector((state) => state.sport.Cordage);
    const editBody = (item) => {
        dispatch(EDIT_BODY(item.id));
        if(item.duration){
            dispatch(EDIT_MIU(110))
            router("/sport")
        }else{
            dispatch(EDIT_MIU(0))
        }
    }
    const editCordage = (item) => {
        dispatch(EDIT_CORDAGE(item.id))
    }
    return (
        <div className='Sport'>
            {window.location.pathname === "/sport/cordage" && 
                <nav className='Sport-body'>
                    {CORDAGE.map((item) => {
                        return(
                            <ul key={item.id} className={Cordage === item.id ? "Sport-select" : ""} onClick={() => editCordage(item)}>
                                <li>{item.id + 1}. {item.name}</li>
                                {item.quantity ? <span>{item.quantity}</span> : <span>{item.duration}</span>}
                            </ul>
                        )
                    })}
                </nav>
            }

            {window.location.pathname === "/sport/kungfu" && 
                <nav className='Sport-body'>
                    {BODY.map((item) => {
                        return(
                            <ul style={{backgroundColor: (item.id === 0 || item.id === 40 || item.id === 122 || item.id === 140) && "#f89393"}} key={item.id} className={Body === item.id ? "Sport-select" : ""} onClick={() => editBody(item)}>
                                <li>{item.id + 1}. {item.name}</li>
                                {item.quantity ? <span>{item.quantity}</span> : <span>{item.duration}</span>}
                            </ul>
                        )
                    })}
                </nav>
            }
            <span className='Sport-Home' onClick={() => router("/sport")}><i className="fa-solid fa-house"></i></span>
        </div>
    );
};

export default Sport;
