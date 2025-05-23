import React, { useLayoutEffect, useRef } from 'react';
import "../styles/layoffmusic.scss";
import { ImLoop } from "react-icons/im";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { IoIosPause } from "react-icons/io";
import { FaRandom } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { SlLoop } from "react-icons/sl";

const LayoffMusic = (props) => {
    const data = props.MusicTitle;
    const clickW = useRef();
    const preSong = () => {
        const index = props.music.findIndex(x => x.name === data.name);
        if(index === 0){
            props.setMusicTitle(props.music[props.music.length - 1])
        }else{
            props.setMusicTitle(props.music[index-1])
        }
        props.audioElem.current.currentTime = 0;
        props.setIsPlaying(true);
    }
    const NextSong = () => {
        const index = props.music.findIndex(x => x.name === data.name);
        if(index === props.music.length - 1){
            props.setMusicTitle(props.music[0])
        }else{
            props.setMusicTitle(props.music[index + 1])
        }
        props.audioElem.current.currentTime = 0;
        props.setIsPlaying(true);
    }
    const editProgress = (e) => {
        const width = clickW.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress = offset / width * 100;
        props.audioElem.current.currentTime = divprogress / 100 * props.MusicTitle.length;
    }
    const loopAllMusic = () => {
        props.setActive(0);
        if(props.MusicTitle.progress === 100){
            const index = props.music.findIndex(x => x.name === data.name);
            if(index === props.music.length - 1){
                props.setMusicTitle(props.music[0])
            }else{
                props.setMusicTitle(props.music[index + 1])
            }
            props.audioElem.current.currentTime = 0;
            props.setIsPlaying(true);
        }
    }
    const loopRandomMusic = () => {
        props.setActive(1);
        if(props.MusicTitle.progress === 100){
            const index = props.music[(Math.floor(Math.random() * (props.music.length + 1)))]
            props.setMusicTitle(index);
            props.audioElem.current.currentTime = 0;
            props.setIsPlaying(true);
        }
    }
    useLayoutEffect(() => {
        if(props.active !== 2){
            if(props.active === 0){
                loopAllMusic();
            }else{
                loopRandomMusic();
            }
        }
    })
    const Data = Object.keys(data).length === 0
    return (
        <>
            {!Data &&
                <div className="layoffmusic">
                    <button className={`layoffmusic__btn ${props.active === 0 ? "layoffmusic__btn_Active" : ""}`} onClick={() => loopAllMusic()}>
                        <SlLoop />
                    </button>
                    <div className="layoffmusic__img">
                        <img alt={data.name} src={data.img}/>
                    </div>
                    <div className="layoffmusic__title">{data.name ? data.name : "Đang Tải.."}</div>
                    <div className="layoffmusic__subtitle">{data.auth ? data.auth : "Đang Tải.."}</div>
                    <div className="layoffmusic__wrapper">
                        <div className="layoffmusic__time layoffmusic__time-passed">{data.min ? data.min : "00:00"}</div>
                        <div className="layoffmusic__timeline"><progress value={data.progress ? data.progress : "0"} max="100" onClick={(e) => editProgress(e)} ref={clickW}></progress></div>
                        <div className="layoffmusic__time layoffmusic__time-left">{data.max ? data.max : "00:00"}</div>
                    </div>
                    <div className="layoffmusic__wrapper">
                        <button className={`layoffmusic__btn ${props.active === 2 ? "layoffmusic__btn_Active" : ""}`} onClick={() => props.setActive(2)}><ImLoop /></button>
                        <button className="layoffmusic__btn" onClick={() => preSong()}><GrChapterPrevious /></button>
                        <button className="layoffmusic__btn layoffmusic__btn-play" onClick={() => props.setIsPlaying(!props.isPlaying)}>{props.isPlaying ? <IoIosPause />: <IoIosPlay/>}</button>
                        <button className="layoffmusic__btn" onClick={() => NextSong()}><GrChapterNext /></button>
                        <button className={`layoffmusic__btn ${props.active === 1 ? "layoffmusic__btn_Active": ""}`} onClick={() => loopRandomMusic()}><FaRandom /></button>
                    </div>
                </div>
            }
        </>
    );
};

export default LayoffMusic;