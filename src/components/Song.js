import React from 'react';
import "../styles/song.scss";
import Music from './Music';
import LayoffMusic from "./LayoffMusic";

const Song = (props) => {
    return (
        <div className='song'>
            <LayoffMusic isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying} MusicTitle={props.MusicTitle} audioElem={props.audioElem} setMusicTitle={props.setMusicTitle} music={props.data} setActive={props.setActive} active={props.active}/>
            <Music music={props.data} selectMusic={props.selectMusic} setIsPlaying={props.setIsPlaying} MusicTitle={props.MusicTitle}/>
        </div>
    );
};

export default Song;