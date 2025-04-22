import React from 'react';
import chess from '../assets/PDF/Cờ Vây.pdf';
import "../styles/chess.scss";
import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react'

const Chess = () => {
    return (
        <div className='chess'>
            <div className='c-chess'>
                <a href={chess} download="Cờ Vây" target='_blank'>
                    <button className="c-chess_button" href={chess}>
                        <span className="c-chess_button_lg">
                            <span className="c-chess_button_sl"></span>
                            <span className="c-chess_button_text">Cờ Vây</span>
                        </span>
                    </button>
                </a>
                <RPConfig>
                    <RPProvider src={chess}>
                        <RPDefaultLayout style={{ height: '660px' }}>
                            <RPPages />
                        </RPDefaultLayout>
                    </RPProvider>
                </RPConfig>
            </div>
        </div>
    );
};

export default Chess;