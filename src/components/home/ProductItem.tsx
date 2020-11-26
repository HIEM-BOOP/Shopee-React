import React, { Component } from 'react';
import Item from '../../components/home/Item';
import { Product } from '../../model/Product';


class productItem extends Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {
            ShoppeListPhone: this.props.ShoppeListPhone
        }
        console.log(this.state.ShoppeListPhone)
    }

    render() {
        return (
            <div className='products'>
                {this.state.ShoppeListPhone.map(item => {
                    return <Item  {...item} />
                })}
            </div>
        );
    }
}
type State = {
    ShoppeListPhone: any[]
}
type Props = {
    ShoppeListPhone: any[]
}






export default productItem;