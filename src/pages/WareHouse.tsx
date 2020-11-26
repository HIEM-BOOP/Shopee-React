import { throws } from 'assert';
import { type } from 'os';
import React, { Component } from 'react';
import Header from '../components/home/Header';
import DialogAddItem from '../components/warehouse/DialogAddItem';
import WareHouseProduct from '../components/warehouse/WareHouseProduct';
import UpdateItem from '../components/warehouse/UpdateItem';



class warehouse extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showDialog: false,
            showDialogUppdate: false,
            ShoppeListPhone: [],
            showDialogUppdateID: ''
        }
        let LocalPhone = localStorage.getItem('Shopee');
        let LocalShooppe = JSON.parse(LocalPhone || '[]');
        this.state = {
            showDialog: false,
            showDialogUppdate: false,
            ShoppeListPhone: LocalShooppe,
            showDialogUppdateID: ''
        }
        console.log(this.state.ShoppeListPhone)



    }

    render() {
        return (
            <div>
                <Header />
                <div className="them-sp">
                    <div className="container">
                        <div className="content">
                            <div className="addProduct">
                                <h1 className="title">DANH SÁCH SẢN PHẨM TRONG KHO</h1>
                                <button onClick={(event) => {
                                    this.setState({
                                        showDialog: true
                                    })
                                }} className="btn btn-primary" >Thêm sản phẩm  {

                                    } </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showDialog == true && < DialogAddItem showDialog={this.state.showDialog} onChangeExit={(exit) => {
                    this.setState({
                        showDialog: false
                    })
                }} />}
                <div className='products'>
                    <WareHouseProduct onChangeDialogID={(event) => {
                        this.setState({ showDialogUppdateID: event })
                    }} ShoppeListPhone={this.state.ShoppeListPhone} onChangeDialogUpdate={(event) => {
                        this.setState({ showDialogUppdate: true })
                    }} />
                </div>

                {this.state.showDialogUppdate == true && <UpdateItem onChangeExitDiaLogUpdate={(event) => {
                    this.setState({ showDialogUppdate: false })
                }} propsProductID={this.state.showDialogUppdateID} />}

            </div>
        );
    }
}
type State = {
    showDialog: boolean
    showDialogUppdate: boolean
    ShoppeListPhone: any[]
    showDialogUppdateID: string
}




export default warehouse;