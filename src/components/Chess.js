import React from 'react';
import { MobilePDFReader } from 'react-read-pdf';
import chess from '../assets/PDF/Cờ Vây.pdf';
import "../styles/chess.scss";

const Chess = () => {
    return (
        <div className='chess'>
            <div className='c-chess'>
                <a href={chess} download="Cờ Vây" target='_blank'>
                    <button className="c-chess_button" href={chess}>
                        <span className="c-chess_button_lg">
                            <span className="c-chess_button_sl"></span>
                            <span className="c-chess_button_text">Download Now</span>
                        </span>
                    </button>
                </a>
                <MobilePDFReader url={chess}/>
            </div>
        </div>
    );
};

export default Chess;