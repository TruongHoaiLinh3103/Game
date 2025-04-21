import React, { useEffect, useLayoutEffect, useState } from 'react';
import "../styles/layoffmusic.scss";
import { ImLoop } from "react-icons/im";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { IoIosPause } from "react-icons/io";
import { FaRandom } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { EDIT_LOADING } from '../redux/reducer/rootMusic';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlay } from "react-icons/fa";

const LayoffMusic = () => {
    const Loading = useSelector((state) => state.music.Loading);
    const params = useParams();
    const [data, setData] = useState([]);
    const [max, setMax] = useState()
    const [pause, setPause] = useState(Loading.id === 0 ? false : true)
    const router = useNavigate();
    const dispatch = useDispatch();
    const nextMusic = (id) => {
        if(id === max){
            router("/song/1")
        }else{
            router(`/song/${id+1}`)
        }
    }
    const PreMusic = (id) => {
        if(id === 1){
            router(`/song/${max}`)
        }else{
            router(`/song/${id-1}`)
        }
    }
    const PauseMusic = (item) => {
        const temp = {
            "id": 0,
            "name": "",
            "img": "",
            "audio": "",
            "auth": ""
        }
        if(temp.id === Loading.id){
            setPause(true)
            dispatch(EDIT_LOADING(item))
        }else{
            setPause(false);
            dispatch(EDIT_LOADING(temp))
        }
    }
    useEffect(() => {
        axios.get(`https://fake-api-music.vercel.app/music/${params.id}`).then((res) => {
            setData(res.data);
            dispatch(EDIT_LOADING(res.data))
        })
    }, [params.id])
    const Data = Object.keys(data).length === 0
    useLayoutEffect(() => {
        axios.get("https://fake-api-music.vercel.app/music").then((res) => {
            setMax(res.data.length);
        })
    })
    return (
        <>
            {!Data &&
                <div className="layoffmusic">
                    <button className="layoffmusic__btn layoffmusic__btn-menu">
                        <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v3h-12-12zm0 7.5h24v3h-24zm0 7.5h24v3h-24z" fill="#fff"></path></svg>
                    </button>
                    <div className="layoffmusic__img">
                        <img alt='' src={data.img}/>
                    </div>
                    <div className="layoffmusic__title">{data.name}</div>
                    <div className="layoffmusic__subtitle">{data.auth}</div>
                    <div className="layoffmusic__wrapper">
                        <div className="layoffmusic__time layoffmusic__time-passed">03:34</div>
                        <div className="layoffmusic__timeline"><progress value="55" max="100"></progress></div>
                        <div className="layoffmusic__time layoffmusic__time-left">02:04</div>
                    </div>
                    <div className="layoffmusic__wrapper">
                        <button className="layoffmusic__btn"><ImLoop /></button>
                        <button className="layoffmusic__btn" onClick={() => PreMusic(data.id)}><GrChapterPrevious /></button>
                        <button className="layoffmusic__btn layoffmusic__btn-play" onClick={() => PauseMusic(data)}>{pause ? <IoIosPause /> : <FaPlay />}</button>
                        <button className="layoffmusic__btn" onClick={() => nextMusic(data.id)}><GrChapterNext /></button>
                        <button className="layoffmusic__btn"><FaRandom /></button>
                    </div>
                </div>
            }
        </>
    );
};

export default LayoffMusic;