import React from 'react';
import "../styles/song.scss";
import Music from './Music';
import LayoffMusic from "./LayoffMusic";

const Song = (props) => {
    return (
        <div className='song'>
            <LayoffMusic isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} onTimeUpdate={props.onTimeUpdate} MusicTitle={props.MusicTitle}/>
            <Music music={props.data} selectMusic={props.selectMusic} setIsPlaying={props.setIsPlaying}/>
        </div>
    );
};

export default Song;