import React from 'react';
import "../styles/layoffmusic.scss";
import { ImLoop } from "react-icons/im";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { IoIosPause } from "react-icons/io";
import { FaRandom } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const LayoffMusic = (props) => {
    const data = props.MusicTitle;
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
                        <div className="layoffmusic__time layoffmusic__time-passed">03:34</div>
                        <div className="layoffmusic__timeline"><progress value="55" max="100" onClick={() => props.onTimeUpdate()}></progress></div>
                        <div className="layoffmusic__time layoffmusic__time-left">02:04</div>
                    </div>
                    <div className="layoffmusic__wrapper">
                        <button className="layoffmusic__btn"><ImLoop /></button>
                        <button className="layoffmusic__btn"><GrChapterPrevious /></button>
                        <button className="layoffmusic__btn layoffmusic__btn-play" onClick={() => props.setIsPlaying(!props.isPlaying)}>{props.isPlaying ? <IoIosPause />: <FaPlay/>}</button>
                        <button className="layoffmusic__btn"><GrChapterNext /></button>
                        <button className="layoffmusic__btn"><FaRandom /></button>
                    </div>
                </div>
            }
        </>
    );
};

export default LayoffMusic;