import React, { Component } from 'react';
import Header from '../components/home/Header';
import Pooter from '../components/home/Pooter';
import Slider from '../components/home/Slider';
import ProductItem from '../components/home/ProductItem';


class home extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            ShoppeListPhone: []
        }
        let LocalPhone = localStorage.getItem('Shopee');
        let LocalShooppe = JSON.parse(LocalPhone || '[]');
        this.state = {
            ShoppeListPhone: LocalShooppe
        }
        console.log(this.state.ShoppeListPhone)




    }



    render() {
        return (
            <div id='home-pages'>
                <Header />
                < Slider />
                < ProductItem  ShoppeListPhone={this.state.ShoppeListPhone} />
                < Pooter />
            </div>
        );
    }
}
type State = {
    ShoppeListPhone: any[]
}



export default home;