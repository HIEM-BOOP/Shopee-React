import React, { Component } from 'react';
import ItemWareHouse from '../../components/warehouse/ItemWareHouse';
import { Product } from '../../model/Product';
import Item from '../home/Item';



class WareHouseProduct extends Component<Props, State>  {
    constructor(props: Props) {
        super(props);

        this.state = {
            ShoppeListPhone: this.props.ShoppeListPhone,
            propsShowDiaLogUpdate: false ,     
            onChangeDialogUpdate: ''
    
        }

    }

    render() {
        return (
            <div className='products'>
                {
                    this.props.ShoppeListPhone.map(item => {
                        return <ItemWareHouse  propsProduct={item} onEditProduct={(event) =>{
                            this.props.onChangeDialogID(event)
                        }} onChangeDialogUpdate={(event)  => {
                            event = true
                            this.props.onChangeDialogUpdate(event)
                        }} />
                    })
                }
            </div>
        );
    }
}
type State = {
    ShoppeListPhone: any[]
    propsShowDiaLogUpdate: boolean
    onChangeDialogUpdate: string
    
}
type Props = {
    ShoppeListPhone: any[]
    onChangeDialogUpdate(event: boolean): void
    onChangeDialogID(event: string): void
}


export default WareHouseProduct;