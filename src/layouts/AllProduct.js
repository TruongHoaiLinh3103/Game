import React, { useEffect, useState } from 'react';
import "../styles/allproduct.scss";
import axios from "axios";
import '../styles/grid.scss';
import { useNavigate } from 'react-router-dom';

const AllProduct = () => {
    const [product, setProduct] = useState([]);
    const history = useNavigate()
    const click = (product) => {
        let id = product.id;
        history(`/product/${id}`)
    }
    useEffect(() => {
        axios.get("http://localhost:4000/product").then((res) => {
            if(res && res.data){
                setProduct(res.data)
            }
        })
    })
    return (
        <div className="grid__row">
            {product.map((item) => {
                return(
                    <div className="grid__colum2-5 c__colum6 m__colum3" key={item.id} onClick={() => click(item)}>
                        <div className="card__product">
                            <img className="card__product-img" src={item.img} alt=''/>
                            <div className="card__product-textBox">
                                <p className="card__product-text head">{item.name}</p>
                                <span>Loại: {item.giamGia}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default AllProduct;