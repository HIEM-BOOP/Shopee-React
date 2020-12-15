"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cartItem: {
                idProduct: _this.props.idProduct,
                quantityProduct: 1
            },
            objItem: {
                idProduct: _this.props.idProduct, afterSale: _this.props.afterSale, beforSale: _this.props.beforSale, imgProduct: _this.props.imgProduct, nameProduct: _this.props.nameProduct, percentageDiscount: _this.props.percentageDiscount
            }
        };
        var LocalPhoneCart = localStorage.getItem('Cart');
        var LocalShooppeCart = JSON.parse(LocalPhoneCart || '[]');
        console.log(LocalShooppeCart);
        LocalShooppeCart.map(function (item) {
            if (item == _this.state.cartItem.idProduct) {
                _this.state = {
                    cartItem: {
                        idProduct: _this.props.idProduct,
                        quantityProduct: item.quantityProduct
                    },
                    objItem: {
                        idProduct: _this.props.idProduct, afterSale: _this.props.afterSale, beforSale: _this.props.beforSale, imgProduct: _this.props.imgProduct, nameProduct: _this.props.nameProduct, percentageDiscount: _this.props.percentageDiscount
                    }
                };
            }
        });
        return _this;
    }
    Item.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "productCard" },
            react_1["default"].createElement("img", { src: this.props.imgProduct, alt: "" }),
            react_1["default"].createElement("div", { className: "nameProduct" },
                react_1["default"].createElement("p", null,
                    " ",
                    this.props.nameProduct,
                    "  "),
                react_1["default"].createElement("p", null,
                    this.props.idProduct,
                    "  ")),
            react_1["default"].createElement("div", { className: "price" },
                react_1["default"].createElement("span", { className: "afterSale" },
                    " ",
                    this.props.afterSale,
                    " "),
                react_1["default"].createElement("span", { className: "beforSale" },
                    " ",
                    this.props.beforSale)),
            react_1["default"].createElement("div", { className: "btn btn-primary-solid btn-Rounded btn-default", onClick: function (event) {
                    var MangMS = [];
                    var ArrayNew = {
                        idProduct: _this.state.cartItem.idProduct,
                        quantityProduct: _this.state.cartItem.quantityProduct
                    };
                    var localForMe = localStorage.getItem("Cart");
                    var listShopee = JSON.parse(localForMe || "[]");
                    listShopee.map(function (item) {
                        if (item.idProduct == _this.props.idProduct) {
                            item.quantityProduct = item.quantityProduct++;
                        }
                    });
                    var KiemTre = false;
                    var isExist = false;
                    listShopee.forEach(function (item) {
                        if (item.idProduct == _this.props.idProduct) {
                            ArrayNew.quantityProduct = item.quantityProduct++;
                            localStorage.setItem("Cart", JSON.stringify(listShopee));
                            alert('Chúc mừng mày đả Tăng thành công');
                            isExist = true;
                        }
                        if (item.idProduct != _this.props.idProduct) {
                            KiemTre = true;
                        }
                    });
                    if (!isExist) {
                        var objShopee = ArrayNew;
                        listShopee.push(objShopee);
                        localStorage.setItem("Cart", JSON.stringify(listShopee));
                        alert('Chúc mừng bạn đã thêm thành công');
                    }
                    // window.location.href = "http://localhost:3000/"
                } }, "\u0110\u01B0a v\u00E0o gi\u1ECF h\u00E0ng")));
    };
    return Item;
}(react_1.Component));
exports["default"] = Item;
