import React from 'react';
import chess from '../assets/PDF/Cờ Vây.pdf';
import "../styles/chess.scss";
import { RPProvider, RPDefaultLayout, RPPages, RPConfig, RPTheme } from '@pdf-viewer/react'

const Chess = (props) => {
    const customLightTheme = {
        '--rp-text-color': '#2563eb',
        '--rp-toolbar-background': '#ffffff'
        // Add more CSS variables as needed
    };
    const customDarkTheme = {
        '--rp-text-color': '#60a5fa',
        '--rp-toolbar-background': '#1f2937'
        // Add more CSS variables as needed
    };
    return (
        <div className='chess' style={{display: !props.Check ? "none" : "block"}}>
            <div className='c-chess'>
                <a href={chess} download="Cờ Vây">
                    <button className="c-chess_button" href={chess}>
                        <span className="c-chess_button_lg">
                            <span className="c-chess_button_sl"></span>
                            <span className="c-chess_button_text">GO</span>
                        </span>
                    </button>
                </a>
                <RPConfig>
                    <RPProvider src={chess}>
                        <RPTheme customVariables={customLightTheme} customDarkVariables={customDarkTheme}>
                            <RPDefaultLayout>
                                <RPPages />
                            </RPDefaultLayout>
                        </RPTheme>
                    </RPProvider>
                </RPConfig>
            </div>
        </div>
    );
};

export default Chess;