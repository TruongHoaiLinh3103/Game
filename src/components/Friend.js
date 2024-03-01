import React, { useEffect, useState } from 'react';
import '../styles/friend.scss';
import '../styles/grid.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import friend from '../assets/friend-empty.png';
import { mapStateToProps } from "../redux/action/Login";

const Friend = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/friend").then(res => {
            if(res && res.data){
                setData(res.data)
            }
        })
    })
    const temp = props.dataUser[0];
    const user = temp ? temp.username : undefined;
    return (
        <div className='grid'>
            <div className='grid__row'>
                <div className='grid__colum12'>
                    <div className='title'>
                        <h3>Các mục yêu thích</h3>
                    </div>
                    {user ? 
                        <div className='friend__body'>
                            {data.map((item) => {
                                return(
                                    <>
                                        {user === item.username &&
                                            <div className='friend__body-body' key={item.id}>
                                                <div className='friend-body-body_checkboxAndImg'>
                                                    <input type='checkbox' className='friend-body-body_checkbox'></input>
                                                    <img src={item.img} alt='' className='body_checkboxAndImg-img'/>
                                                </div>
                                                <div className='friend__body-body_nameAndPrice'>
                                                    <span className='body_tittleAndPrice-name'>{item.name}</span>
                                                    <span className="body_tittleAndPrice-voucher">Loại: {item.loai}</span>
                                                </div>
                                            </div>
                                        }
                                    </>
                                )
                            })}
                        </div>
                        :
                        <div style={{textAlign:'center'}}>
                            <h2
                            style={{
                                fontSize: "20px",
                                color: "rgb(101, 103, 107)",
                                fontWeight: "700",
                                lineHeight: "24px",
                                margin: "40px",
                            }}
                            >Không có mục yêu thích</h2>
                            <img src={friend} alt='' style={{width:"200px"}}></img>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(Friend);