import React from 'react';
import { MobilePDFReader } from 'react-read-pdf';
import chess from '../assets/PDF/Cờ Vây.pdf';
import "../styles/chess.scss";

const Chess = () => {
    return (
        <div className='chess'>
            <div className='c-chess'>
                <MobilePDFReader url={chess}/>
            </div>
        </div>
    );
};

export default Chess;