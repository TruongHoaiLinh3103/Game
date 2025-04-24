import React, { useRef } from 'react';
import "../styles/layoffmusic.scss";
import { ImLoop } from "react-icons/im";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { IoIosPause } from "react-icons/io";
import { FaRandom } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

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
    }
    const NextSong = () => {
        const index = props.music.findIndex(x => x.name === data.name);
        if(index === props.music.length - 1){
            props.setMusicTitle(props.music[0])
        }else{
            props.setMusicTitle(props.music[index + 1])
        }
        props.audioElem.current.currentTime = 0;
    }
    const editProgress = (e) => {
        const width = clickW.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress = offset / width * 100;
        props.audioElem.current.currentTime = divprogress / 100 * props.MusicTitle.length;
    }
    const Data = Object.keys(data).length === 0
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
                        <div className="layoffmusic__time layoffmusic__time-passed">{props.MusicTitle.min ? props.MusicTitle.min : "00:00"}</div>
                        <div className="layoffmusic__timeline"><progress value={props.MusicTitle.progress ? props.MusicTitle.progress : "0"} max="100" onClick={(e) => editProgress(e)} ref={clickW}></progress></div>
                        <div className="layoffmusic__time layoffmusic__time-left">{props.MusicTitle.max ? props.MusicTitle.max : "00:00"}</div>
                    </div>
                    <div className="layoffmusic__wrapper">
                        <button className="layoffmusic__btn"><ImLoop /></button>
                        <button className="layoffmusic__btn" onClick={() => preSong()}><GrChapterPrevious /></button>
                        <button className="layoffmusic__btn layoffmusic__btn-play" onClick={() => props.setIsPlaying(!props.isPlaying)}>{props.isPlaying ? <IoIosPause />: <FaPlay/>}</button>
                        <button className="layoffmusic__btn" onClick={() => NextSong()}><GrChapterNext /></button>
                        <button className="layoffmusic__btn"><FaRandom /></button>
                    </div>
                </div>
            }
        </>
    );
};

export default LayoffMusic;