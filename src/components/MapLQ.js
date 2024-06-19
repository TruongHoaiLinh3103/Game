import React, { useState } from 'react';
import "../styles/maplq.scss";

const MapLQ = () => {
    const [ponter, setPonter] = useState(1);

    return (
        <div className='MapLQ'>
            <p className='MapLQ-p'>
                Liên Quân Mobile có rất nhiều chế độ chơi với những bản đồ vô cùng đa dạng, giúp bạn chiến đấu không biết chán. Bên cạnh bản đồ 5v5, người chơi có thể thỏa sức cùng bạn bè trải nghiệm các bản đồ tùy biến khác như 5v5 Độc Đạo, 3v3, 1v1, và những chế độ chơi đặc biệt liên tục được cập nhật.
            </p>
            <h3 className='MapLQ-h3'>Các chế độ chơi</h3>
            <div className='MapLQBMap'>
                <div className="options">
                    <div className={`option ${ponter === 1 ? "active" : ""}`} onClick={() => setPonter(1)}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                            <img src="" alt='1vs1'/>
                            </div>
                            <div className="info">
                            <div className="main">1 VS 1</div>
                            <div className="sub">Đấu Solo</div>
                            </div>
                        </div>
                    </div>
                    <div className={`option ${ponter === 2 ? "active" : ""}`} onClick={() => setPonter(2)}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                            <img src="" alt='3vs3'/>
                            </div>
                            <div className="info">
                            <div className="main">3 VS 3</div>
                            <div className="sub">Đấu Đoàn Đội</div>
                            </div>
                        </div>
                    </div>
                    <div className={`option ${ponter === 3 ? "active" : ""}`} onClick={() => setPonter(3)}>
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">
                            <img src="https://i.pinimg.com/originals/a1/1c/ee/a11ceee65559f1f749cbffa8ccdff679.jpg" alt='5vs'/>
                            </div>
                            <div className="info">
                            <div className="main">5 VS 5</div>
                            <div className="sub">Đấu Tổ Hợp</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MapLQ_detail'>
                <div className='MapLQ_detailBox'>
                    <h3 className='MapLQ-h3'>Mục tiêu</h3>
                    <div className='MapLQ-img'>
                        <img src='https://i.pinimg.com/originals/b2/ac/e7/b2ace740ed99c4f19840be63e421c0f6.jpg' alt='muc-tieu' />
                    </div>
                    <p className='MapLQ-p'>Ở tất cả các chế độ, mục tiêu cuối cùng, mục tiêu quan trọng nhất vẫn là phá hủy nhà chính đối phương. Tuy nhiên, để làm được điều đó, bạn sẽ phải farm quái, giao tranh hạ gục đối phương và tiến tới phá hủy các trụ bảo vệ. Tùy từng chế độ mà mỗi bên có số lượng trụ khác nhau.</p>
                </div>
                <div className='MapLQ_detailBox'>
                    <h3 className='MapLQ-h3'>Đường</h3>
                    <div className='MapLQ-img'>
                        <img src='https://i.pinimg.com/originals/9d/ac/f1/9dacf1f70620d6e944d865cf14522b2e.jpg' alt='duong' />
                    </div>
                    <p className='MapLQ-p'>Ở chế độ 5vs5, việc chọn lựa đường đi vô cùng quan trọng, Nó ảnh hưởng rất lớn đến quá trình trận đấu có thuận lợi hay không. Để làm được điều đó, bạn cần phải trao đổi với đồng minh của mình, tránh việc thiếu chủ lực hoặc hỗ trợ dẫn đến một trận đấu hỏng. Tùy từng trận đấu mà đội hình có thể sắp xếp khác nhau.</p>
                </div>
                <div className='MapLQ_detailBox'>
                    <h3 className='MapLQ-h3'>Quái vật</h3>
                    <div className='MapLQ-img'>
                        <img src='https://i.pinimg.com/originals/07/96/6d/07966d072bad2f558ba94b5b2082cf1a.jpg' alt='quai-vat' />
                    </div>
                    <p className='MapLQ-p'>Ở tất cả các chế độ, ngoại trừ lính của mỗi đường, thì quái vật trong rừng cũng cung cấp lượng lớn vàng và kinh nghiệm. Tuy nhiên, ở giai đoạn đầu trận, quái vật là của rừng, giao tranh hạ gục đối phương và tiến tới phá hủy các trụ bảo vệ. Tùy từng chế độ mà mỗi bên có số lượng trụ khác nhau.</p>
                </div>
            </div>
        </div>
    );
};

export default MapLQ;