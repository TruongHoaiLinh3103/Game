import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotPage = () => {
    const history = useNavigate();
    const backHome = () => {
        history("/");
    }
    return (
        <div style={{textAlign:"center", padding: "75px 0px 10px"}}>
            <i className="fa-solid fa-triangle-exclamation"
            style={{
                fontSize:"70px",
                color: "red"
            }}
            ></i>
            <h3 style={{fontSize:"20px", color:"#65676b", fontWeight:"700", lineHeight:"24px", marginTop:"10px"}}>Bạn hiện không xem được nội dung này</h3>
            <p style={{fontSize:"17px", color:"#65676b", lineHeight:"20.0005px", marginTop:"10px"}}>Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một<br/> nhóm nhỏ, thay đổi người được xem hoặc đã xóa nội dung.</p>
            <button onClick={() => backHome()} 
            style={{
                backgroundColor: "#1b74e4",
                borderRadius: "6px",
                color: "white",
                padding: "10px 20px",
                fontSize: "15px",
                outline: "none",
                border: "none",
                fontWeight: "600",
                marginTop: "10px",
                cursor:"pointer",
            }}
            >Trở về trang chủ</button>
        </div>
    );
};

export default NotPage;