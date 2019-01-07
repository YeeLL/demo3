import React, { Component } from 'react';
import './style.css'
import logo from '../../logo.svg';





class OrderItem extends Component {

    render() {
        const {shop,product,price,picture,ifCommented} = this.props.data;
        return (
            <div className="OrderItem">
                <div className='orderItem__picContainer'>
                <img className='orderItem__pic' src={picture}/>
                </div>
                <div className='orderItem__content'>
                <div className='oriderItem__product'>{product}</div>
                <div className='oriderItem__shop'>{shop}</div>
                <div className='orderItem__detail'>
                    <div className='orderItem__price'>{price}</div>
                    <div>
                    {
                        ifCommented ? (
                            <button className="orderItem__btn--dark">已评价</button>
                        ):( <button className="redorderItem__btn--red">评价</button>)
                    }
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;