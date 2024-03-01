import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/action/Login';
import { useNavigate, useParams } from 'react-router-dom';
const Id = (props) => {
    const [data, setData]  = useState({})
    const [comment, setComment] = useState([])
    const [cmt, setCmt] = useState("")
    const history = useNavigate();
    const params = useParams()

    const handleBackNotification = () =>{
        history('/')
    }
    const valueComment = (e) => {
        setCmt(e.target.value)
    }
    const addComment = () => {
        const id = params.id;
        const data = {
            Comment: cmt,
            ProductId: id
        }
        axios.post(`http://localhost:4000/comment`, data,
        {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }
        ).then(res => {
            if(res.data.error){
                alert("Vui lòng đăng nhập để bình luận")
            }else{
                
                const commentToApp = {Comment: cmt}
                setComment([...comment, commentToApp])
                setCmt("")
            }
        })
    }
    const Enter = (e) => {
        if(e.which === 13){
            const id = params.id;
            const data = {
                Comment: cmt,
                ProductId: id
            }
            axios.post(`http://localhost:4000/comment`, data,
            {
                headers: {
                    accessToken: sessionStorage.getItem("accessToken")
                }
            }
            ).then(res => {
                if(res.data.error){
                    alert("Vui lòng đăng nhập để bình luận")
                }else{
                    // const commentToApp = {Comment: this.state.Comment, username: res.data.username}
                    // this.setState({
                    //     comment: ([...this.state.comment, commentToApp]),
                    // })
                    // this.setState({
                    //     Comment: ""
                    // })
                    const commentToApp = {Comment: cmt}
                    setComment([...comment, commentToApp])
                    setCmt("")
                }
            })
        }
    }
    const handleNextCart = () => {
        const data = {
            img: data.img,
            name: data.name,
            loai: data.loai,
        }
        axios.post("http://localhost:4000/cart", data,
        {
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }
        ).then(res => {
            if(res.data.error){
                alert("Vui lòng đăng nhập để thêm vào mục yêu thích")
            }else{
                alert("Thêm vào mục yêu thích thành công")
            }
        })
    }
    const detail = (item) => {
        toast.success(item)
    }
    const deleteComment = (id) => {
        axios.delete(`http://localhost:4000/comment/cmt/${id}`,{
            headers: {
                accessToken: sessionStorage.getItem("accessToken")
            }
        }).then(() =>{
            setComment(comment.filter(item => item.id !== id))
        })
    }

    let user = props.dataUser[0];
    // let { data } = this.state;
    let useData = Object.keys(data).length === 0
    useEffect(() => {
        const id = params.id;
        axios.get(`http://localhost:4000/product/byID/${id}`).then((res) => {
            if(res && res.data){
                setData(res.data)
            }
        })
        
        axios.get(`http://localhost:4000/comment/${id}`).then((res) => {
            if(res && res.data){
                setComment(res.data)
            }
        })
    })
    return (
        <div>
            {useData === false &&
                <div className="center" style={{width: "100%", textAlign: "center", margin: "10px 0px", display:"flex", flexDirection:"column"}}>
                    <div className="title"><h3>Thông tin chi tiết</h3></div>
                    <div className="Name">
                        <img src={data.img} style={{width: "70%"}} alt=''/>
                        <p>Tên sản phẩm: {data.name}</p>
                        <p>Loại: {data.giamGia}</p> 
                        <br></br>
                        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                            <button onClick={() => handleBackNotification()} 
                            style={{width: "70%", border: "none", 
                            outline: "none", padding: "5px", backgroundColor: "black", 
                            color: 'white', borderRadius: '30px', boxShadow: "5px"}}>Back</button>

                            <button
                            style={{marginTop: "10px", width: "70%", border: "none", 
                            outline: "none", padding: "5px", backgroundColor: "black", 
                            color: 'white', borderRadius: '30px', 
                            boxShadow: "5px", cursor:"pointer"}} onClick={() => handleNextCart()}>Thêm vào mục yêu thích</button>
                        </div>
                    </div>
                    <div className='Comment' style={{
                        backgroundColor:"rgb(238,174,202)",
                        background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                        marginTop:"10px",
                        opacity:"0.5px",
                        borderRadius: "20px",
                        padding: "10px 20px"
                    }}>
                        <div className="title" style={{display:"flex", justifyContent:"center"}}><h3>Bình luận sản phẩm</h3></div>
                        <div className="addCommentContainer">
                            <input
                                type="text"
                                placeholder="Comment..."
                                autoComplete="off"
                                onChange={(e) => valueComment(e)}
                                value={cmt}
                                style={{borderRadius: "20px", paddingLeft: "10px"}}
                                onKeyDown={(e) => Enter(e)}
                            />
                            <button onClick={() => addComment()}
                            style={{
                                border:"none", padding: "3px", borderRadius: "20px", marginLeft:"10px", backgroundColor: "white",
                                cursor:"pointer"
                            }}> Add Comment</button>
                        </div>
                        {comment.map((item) => {
                            return(
                                <div key={item.id} style={{
                                    margin:"10px 0px", width:'300px', display:'flex'}}>
                                    <label style={{color: 'blue', marginRight:"5px", justifyItems:"flex-start"}}>{item.username}: </label>
                                    <span style={{
                                        color: "black", 
                                        marginRight:"20px",
                                        display: "inline-block",
                                        maxWidth: "80%",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        flex: "1",
                                        cursor:"pointer",
                                    }}
                                    onClick={() => detail(item.Comment)}>{item.Comment}</span>
                                    {sessionStorage.getItem("accessToken") && item.username === user.username &&
                                        <span style={{
                                            padding:"5px",
                                            color:"black",
                                            fontWeight: "700",
                                            cursor:"pointer",
                                            borderRadius: "100vh",
                                            justifyItems:"flex-end"
                                        }}
                                        onClick={() => deleteComment(item.id)}>X</span>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    );
};

export default connect(mapStateToProps)(Id);