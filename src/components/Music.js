import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "../styles/music.scss";
import { useNavigate } from 'react-router-dom';
import { IoIosPause, IoIosPlay } from 'react-icons/io';
import { GoDownload } from "react-icons/go";
import { IoVolumeHighOutline } from "react-icons/io5";

const Music = (props) => {
    const router = useNavigate();
    const [test, setTest] = useState(false)
    const [data, setData] = useState([]);
    const [tab, setTab] = useState(false);
    const videoElem = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState({})
    const [volume, setVolume] = useState(1); // Volume ranges from 0.0 to 1.0
    const clickW = useRef();
    const [btnVL, setBtnVL] = useState(false)

    const editProgress = (e) => {
        const width = clickW.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress = offset / width * 100;
        videoElem.current.currentTime = divprogress / 100 * progress.length;
    }
    const FullSCreenVideo = () => {
        if (videoElem.current.requestFullscreen) {
            videoElem.current.requestFullscreen();
        }else if (videoElem.current.msRequestFullscreen) {
            videoElem.msRequestFullscreen();
        }else if (videoElem.current.mozRequestFullScreen) {
            videoElem.current.mozRequestFullScreen();
        }else if (videoElem.current.webkitRequestFullScreen) {
            videoElem.current.webkitRequestFullScreen();
        }
    }
    const handlePlayMusic = (item) => {
        props.selectMusic(item);
        props.setIsPlaying(true)
    }
    const handTab = () => {
        setTab(!tab);
        setIsPlaying(false);
    }
    const onPlaying  = () => {
        const duration = videoElem.current.duration;
        const ct = videoElem.current.currentTime;
        // Tìm Max
        let s = duration%60;
        let m = Math.floor((duration/60)%60);
        // Tìm Min
        let si = ct%60;
        let mi = Math.floor((ct/60)%60);
    
        const maxDuration = `${(Math.floor(m) ? (Math.floor(m) < 10 ? `${"0" + Math.floor(m)}` : Math.floor(m)) : "00")}:${Math.floor(s) ? (Math.floor(s) < 10 ? `${"0" + Math.floor(s)}` : Math.floor(s)) : "00"}`;
        const minDuration = `${(Math.floor(mi) ? (Math.floor(mi) < 10 ? `${"0" + Math.floor(mi)}` : Math.floor(mi)) : "00")}:${Math.floor(si) ? (Math.floor(si) < 10 ? `${"0" + Math.floor(si)}` : Math.floor(si)) : "00"}`;
        setProgress({"progress": ct / duration * 100, length: duration, "max": maxDuration, "min": minDuration});
      }
      const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        if (videoElem.current) {
          videoElem.current.volume = newVolume;
        }
      };
    useEffect(() => {
        if(props.music){
            if(props.music.length === 0){
                setTest(false)
            }else{
                setData(props.music);
                setTest(true)
            }       
        }else{
            setTest(false)
        }
    })
    useLayoutEffect(() => {
        if(props.MusicTitle.video){
            if(isPlaying){
                videoElem.current.play();
            }else{
                videoElem.current.pause();
            }
        }
      }, [isPlaying])
    return (
        <div className='music'>
            <div className="m-main">
                <ul className="m_top-bar">
                    <li>
                        <button className="m-btn m-minimize" onClick={() => handTab()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"></path></svg>
                        </button>
                    </li>
                    <li>
                        <button className="m-btn m-close" onClick={() => router("/")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
                        </button>
                    </li>
                </ul>
                <div className="m_data">
                    {test ?
                        data.map((item, index) => {
                            return(
                                <div className="m-songs" key={index} onClick={() => handlePlayMusic(item)}>
                                    <div className="m-loader">
                                        <div className="m-song">
                                            <p className="m-name">{item.name}</p>
                                            <p className="m-artist">{item.auth}</p>
                                        </div>
                                        <div className="m-albumcover">
                                            <img className='m-albumcover-img' src={item.img} alt='Albumcover'/>
                                        </div>
                                        {props.MusicTitle && props.MusicTitle.id === item.id ? 
                                            <div className="m-loading">
                                                <div className="m-load"></div>
                                                <div className="m-load"></div>
                                                <div className="m-load"></div>
                                                <div className="m-load"></div>
                                            </div>
                                            : 
                                            <div className="m-play"></div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                        : <div className="m-l-loader"></div>
                    }
                </div>
            </div>
            <div className='l_videoTab' style={{display: !tab ? "none" : "flex"}}>
                {props.MusicTitle.video ?
                    <div className="l_videoTabCard">
                        <div className="l_up">
                            <svg className="l-svg-icon" viewBox="0 0 20 20" onClick={() => FullSCreenVideo()}>
                                <path d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z"></path>
                                <path d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z"></path>
                            </svg>
                            <div className="l-right">
                                <svg className="l-svg-icon" viewBox="0 0 20 20">
                                    <path d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"></path>
                                    <path d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"></path>
                                </svg>
                                <svg className="l-svg-icon" viewBox="0 0 20 20" onClick={() => handTab()}>
                                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="l-playbar">
                            <progress className="l-bar" value={progress.progress} max="100" onClick={(e) => editProgress(e)} ref={clickW}></progress>
                        </div>
                        <div className="l-down">
                            <div className="l-down__icons">
                                {isPlaying ? 
                                    <IoIosPause className="l-svg-icon l-pause" onClick={() => setIsPlaying(!isPlaying)}/>
                                    : 
                                    <IoIosPlay className="l-svg-icon l-pause" onClick={() => setIsPlaying(!isPlaying)}/>
                                }
                                <a href={props.MusicTitle.video} download={props.MusicTitle.name}>
                                    <GoDownload className="l-svg-icon"/>
                                </a>

                                <IoVolumeHighOutline className="l-svg-icon" htmlFor="volumeControl" onClick={() => setBtnVL(!btnVL)}/>
                                <input
                                style={{display: btnVL ? "block" : "none"}}
                                id="volumeControl"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                />
                            </div>
                            <p className="l-time">{progress.min ? progress.min : "00:00"} / {progress.max ? progress.max : "00:00"}</p>
                        </div>
                        <video loop src={props.MusicTitle.video} ref={videoElem} onTimeUpdate={onPlaying}/>
                    </div>
                    :
                    <div className="l-error">
                        <div className="l-error__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none">
                                <path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path>
                            </svg>
                        </div>
                        <div className="l-error__title">Vui Lòng Chọn Một Bài Hát!</div>
                        <div className="l-error__close" onClick={() => handTab()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
                                <path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
                            </svg>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Music;