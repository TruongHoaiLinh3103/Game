import React, { Component } from 'react';
import '../styles/grid.scss';
import AllProduct from '../layouts/AllProduct';
import Sliederlab from '../layouts/Sliederlab';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Sliederlab/>
                <div className="grid__row">
                    <div className="grid__colum10 c__colum12 m__colum12">
                        <div className='home-product'>
                            <AllProduct></AllProduct>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;