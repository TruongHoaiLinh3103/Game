import React, { useState } from 'react';
import { FONT } from "../story/FONT";
import "../styles/calligraphy.scss";

const Calligraphy = () => {
    const [calligraphy, setCalligraphy] = useState(false);
    const [text, setText] = useState("");
    const [font, setFont] = useState();
    const [title, setTitle] = useState(false);

    const changeInput = (e) => {
        setText(e.target.value);
        setTitle(false)
    }
    const handFont = (fontText) => {
        setFont(fontText);
        setCalligraphy(!calligraphy);
        setTitle(true);
    }
    const FontText = (e) => {
        if(e.which === 13){
            setCalligraphy(!calligraphy);
        }
    }
    return (
        <div className='Calligraphy'>
            <div className='Calligraphy-box' style={{display: !calligraphy ? "none" : "flex"}}>
                <ul className='Calligraphy-list'>
                    {FONT.map((item, index) => {
                        return(
                            <li className='Calligraphy-item' style={{fontFamily: item.font}} key={index} onClick={() => handFont(item.font)}><span>{item.id}.</span><span>Thư Pháp</span></li>
                        )
                    })}
                </ul>
            </div>
            <div className='Calligraphy-text'>
                <div className="Calligraphy-form">
                    <input className="Calligraphy-input" placeholder="Type your text" required=""
                    onChange={(e) => changeInput(e)}
                    onKeyDown={(e) => FontText(e)}
                    value={text}
                    type="text" />
                    <span className="Calligraphy-input-border"></span>
                </div>
            </div>
            <div className='Calligraphy-show' style={{fontFamily: font, display: title ? "flex" : "none"}}>
                <h2>{text}</h2>
            </div>
        </div>
    );
};

export default Calligraphy;