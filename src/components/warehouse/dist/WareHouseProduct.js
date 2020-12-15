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
var ItemWareHouse_1 = require("../../components/warehouse/ItemWareHouse");
var WareHouseProduct = /** @class */ (function (_super) {
    __extends(WareHouseProduct, _super);
    function WareHouseProduct(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            ShoppeListPhone: _this.props.ShoppeListPhone,
            propsShowDiaLogUpdate: false,
            onChangeDialogUpdate: ''
        };
        return _this;
    }
    WareHouseProduct.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: 'products' }, this.props.ShoppeListPhone.map(function (item) {
            return react_1["default"].createElement(ItemWareHouse_1["default"], { propsProduct: item, onEditProduct: function (event) {
                    _this.props.onChangeDialogID(event);
                }, onChangeDialogUpdate: function (event) {
                    event = true;
                    _this.props.onChangeDialogUpdate(event);
                } });
        })));
    };
    return WareHouseProduct;
}(react_1.Component));
exports["default"] = WareHouseProduct;
