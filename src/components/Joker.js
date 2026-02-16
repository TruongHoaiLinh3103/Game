import React, { useState } from 'react';
import "../styles/joker.scss";
import { JOKERS } from '../story/JOKER';
import { toast } from 'react-toastify';

const Joker = () => {
    const [hidden, setHidden] = useState(true);
    return (
        <div className='joker'>
            <div className="j-card">
                <div className="j-wrap">
                    <div className="j-terminal">
                        <hgroup className="j-head">
                            <p className="j-title">
                            <svg
                                width="16px"
                                height="16px"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                ></path>
                            </svg>
                            Terminal
                            </p>

                            <button className="j-copy_toggle" tabIndex="-1" type="button" onClick={() => setHidden(false)}>
                            <svg
                                width="16px"
                                height="16px"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                                ></path>
                                <path
                                d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                                ></path>
                            </svg>
                            </button>
                        </hgroup>
                        <div className="j-body">
                            <pre className="j-pre">          <code>-&nbsp;</code>
                            <code>What &nbsp;</code>
                            <code className="j-cmd" data-cmd="is a Magician?"></code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className='j-box' style={{display: hidden ? "none" : "flex"}}>
                <div className='b_aler-box'>
                    {JOKERS.map((item) => {
                        return(
                            <div key={item.id}>
                                    {!item.concept ?
                                        <>
                                            <div className='j-box_title' style={{display: item.id === 1 ? "flex" : "none"}}>
                                                <span className='j-box_titleLine'></span>
                                                <h5>Kỹ Năng</h5>
                                                <span className='j-box_titleLine'></span>
                                            </div>
                                            <p className='j-box_name'>{item.id}. {item.name}</p>
                                        </>
                                    :
                                        <>
                                            <div className='j-box_title' style={{display: item.id === 23 ? "flex" : "none"}}>
                                                <span className='j-box_titleLine'></span>
                                                <h5>Công Thức</h5>
                                                <span className='j-box_titleLine'></span>
                                            </div>
                                            <p className='j-box_name' style={{color: "Highlight"}} onClick={() => toast.success(item.concept, {autoClose: 2000})}>{item.id}. {item.name}</p>
                                        </>
                                    }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Joker;