import React, { Component } from 'react';
import CartItem from '../cart/CartItem';
import Item from '../home/Item';

class ListCart extends Component< Props, {}> {
    render() {
        return (
            <div className="container-card">
                 <h1 className="title">Giỏ hàng của bạn</h1>
                 {this.props.listCart.map( (Item) =>{
                     return <CartItem {...Item} />
                 })}
                 
            </div>
        );
    }
}


type Props = {
    listCart: any[]
}


export default ListCart;