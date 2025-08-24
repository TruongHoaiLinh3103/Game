import React, { useState } from 'react';
import "../styles/calligraphy.scss";

const Calligraphy = () => {
    const [text, setText] = useState("Dư Niệm An");

    const changeInput = (e) => {
        setText(e.target.value);
    }
    return (
        <div className='Calligraphy'>
            <div className='Calligraphy-text'>
                <div className="Calligraphy-form">
                    <input className="Calligraphy-input" placeholder="Type your text" required=""
                    onChange={(e) => changeInput(e)}
                    value={text}
                    type="text" />
                    <span className="Calligraphy-input-border"></span>
                </div>
            </div>
            {text !== "" ? 
                <div className='Calligraphy-show'>
                    <h2>{text}</h2>
                </div> :
                <div className='Calligraphy-show'>
                    <h2>A(a) Ă(ă) Â(â) B(b) C(c) D(d) Đ(đ) E(e) Ê(ê) G(g) H(h) I(i) K(k) L(l) M(m) N(n) O(o) Ô(ô) Ơ(ơ) P(p) Q(q) R(r) S(s) T(t) U(u) Ư(ư) V(v) X(x) Y(y)</h2>
                    <h2>Nặng, Sắt, Ngã, Huyền, Hỏi, Ngang, Dọc</h2>
                </div>
            }
        </div>
    );
};

export default Calligraphy;
