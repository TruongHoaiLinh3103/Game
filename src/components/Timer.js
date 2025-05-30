import React, { useEffect, useState } from 'react';
import "../styles/timer.scss";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { EDIT_MIU } from '../redux/reducer/rootSport'

const Timer = () => {
    const Miu = useSelector((state) => state.sport.Miu);
    const dispatch = useDispatch();
    const [sec, setSec] = useState(Miu ? Miu : 0);
    const [start, setStart] = useState(false);
    const router = useNavigate();
    const clock = (sec) => {
        let s = sec%60;
        let m = Math.floor((sec/60)%60);
        let h = Math.floor(sec/(60*60));
        return `${h ? (h < 10 ? `${"0" + h}` : h) : "00"}.${(m ? (m < 10 ? `${"0" + m}` : m) : "00")}.${s ? (s < 10 ? `${"0" + s}` : s) : "00"}`
    }
    const next = (e) => {
        if(e.which === 13){
            if(sec <= 0){
                setStart(false)
            }else{
                setStart(true);
            }
        }
    }
    const changeTime = (e) => {
        setSec(e.target.value);
        dispatch(EDIT_MIU(0));
    }
    useEffect(() => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Time's Up!, Time's Up!";
        msg.pitch = 0.4; // độ cao (0 - 2)
        if(!start){
            clearInterval()
        }else{
            if (sec === 0){
                setStart(false);
                window.speechSynthesis.speak(msg);
                if(Miu){
                    dispatch(EDIT_MIU(0));
                    router("/sport/kungfu")
                }
                return;
            }
            var timer = setInterval(() => {
                setSec(sec-1)
            },1000)
            return() => {
                clearInterval(timer);
            }
        }
    },[start, sec])
    return (
        <div className='Timer'>
            <h3 style={{fontSize: "4em", color: 'white', userSelect: "none", margin: "0px"}}>{clock(sec)}</h3>
            <input type="number" min="0" max="110" value={sec === "" ? 0 : sec} 
                onChange={(e) => changeTime(e)}
                onKeyDown={(e) => next(e)}
                style={{display: start ? "none" : "inline-block"}}
            />
            <span>1d = 24h = 1.440m = 86.400s </span>
            <span>1h = 60m = 3.600s</span>
        </div>
    );
};

export default Timer;
