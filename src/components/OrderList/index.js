import React, { Component } from 'react';
import OrderItem from '../OrderItem'

const datas = {
    product:'果粒橙',
    price:'¥5元',
    picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
    shop:'果粒橙天府新区店',
    ifCommented:true,
}

const dataList=[
    {
        product:'果粒橙',
        price:'¥18元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }, {
        product:'果粒asdfsadf橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }, {
        product:'果粒1111橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:false,
    }, {
        product:'果232323粒橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }, {
        product:'果粒橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }, {
        product:'果粒4444橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }, {
        product:'果粒5555橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:false,
    }, {
        product:'果粒6666橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }, {
        product:'果粒7777橙',
        price:'¥5元',
        picture:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546847558&di=0dca91e7570f67be721746104165250d&src=http://d11.yihaodianimg.com/N07/M0B/0F/17/CgQI0FP9hwKATY_GAANeCgQZOH847101_640x640.jpg",
        shop:'果粒橙天府新区店',
        ifCommented:true,
    }
]


class OrderList extends Component {
    render() {
        return (
            <div>
            {
                dataList.map((maps,index)=>{
                    return <OrderItem  key = {index }data={maps}/>
                })
            }
           
            </div>
        );
    }
}

export default OrderList;