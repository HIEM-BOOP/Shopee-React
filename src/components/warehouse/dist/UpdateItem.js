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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var UpdateItem = /** @class */ (function (_super) {
    __extends(UpdateItem, _super);
    function UpdateItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            idProduct: '', afterSale: 0, beforSale: 0, imgProduct: '', nameProduct: '', percentageDiscount: 0
        };
        var LocalPhone = localStorage.getItem('Shopee');
        var LocalShooppe = JSON.parse(LocalPhone || '[]');
        LocalShooppe.map(function (item) {
            console.log(item);
            _this.props.propsProductID == item.idProduct ? _this.state = __assign({}, item) : console.log(item.nameProduct);
        });
        return _this;
    }
    UpdateItem.prototype.render = function () {
        var _this = this;
        return (
        // display: this.props.showDialogUppdate ? 'block' : 'none'
        react_1["default"].createElement("div", { className: 'mark', style: {} },
            react_1["default"].createElement("div", { className: "content-updateitem" },
                react_1["default"].createElement("h1", { className: "title" }, "Ch\u1EC9nh s\u1EEDa th\u00F4ng tin s\u1EA3n ph\u1EA9m"),
                react_1["default"].createElement("div", { className: "item" },
                    react_1["default"].createElement("label", { htmlFor: "name" }, "T\u00EAn s\u1EA3n ph\u1EA9m"),
                    react_1["default"].createElement("input", { type: "text", id: "nameProduct", name: "name", defaultValue: this.state.nameProduct, onChange: function (event) { return [
                            _this.setState({ nameProduct: event.target.value })
                        ]; } })),
                react_1["default"].createElement("div", { className: "item" },
                    react_1["default"].createElement("label", { htmlFor: "afterSale" }, "Gi\u00E1 b\u00E1n"),
                    react_1["default"].createElement("input", { type: "number", id: "afterSale", name: "afterSale", defaultValue: this.state.afterSale, onChange: function (event) { return [
                            _this.setState({ afterSale: event.target.valueAsNumber })
                        ]; } })),
                react_1["default"].createElement("div", { className: "item" },
                    react_1["default"].createElement("label", { htmlFor: "beforSale" }, "Gi\u00E1 g\u1ED1c"),
                    react_1["default"].createElement("input", { type: "number", id: "beforSale", name: "beforSale", defaultValue: this.state.beforSale, onChange: function (event) { return [
                            _this.setState({ beforSale: event.target.valueAsNumber })
                        ]; } })),
                react_1["default"].createElement("div", { className: "item" },
                    react_1["default"].createElement("label", { htmlFor: "imgProduct" }, "H\u00ECnh \u1EA3nh s\u1EA3n ph\u1EA9m"),
                    react_1["default"].createElement("input", { type: "url", id: "imgProduct", name: "imgProduct", defaultValue: this.state.imgProduct, onChange: function (event) { return [
                            _this.setState({ imgProduct: event.target.value })
                        ]; } })),
                react_1["default"].createElement("div", { className: "button-item" },
                    react_1["default"].createElement("button", { className: "btn btn-primary", onClick: function () {
                            var newArray = new Array;
                            var LocalPhone = localStorage.getItem('Shopee');
                            var LocalShooppe = JSON.parse(LocalPhone || '[]');
                            LocalShooppe.map(function (item) {
                                item.idProduct === _this.state.idProduct ? newArray.push(_this.state) : newArray.push(item);
                            });
                            localStorage.setItem("Shopee", JSON.stringify(newArray));
                            alert('Chúc mừng bạn đã sửa thành công');
                            window.location.href = "/WareHouse";
                        } }, "L\u01B0u"),
                    react_1["default"].createElement("button", { className: "btn btn-outline", onClick: function (event) {
                            _this.props.onChangeExitDiaLogUpdate(true);
                        } }, "H\u1EE7y")))));
    };
    return UpdateItem;
}(react_1.Component));
exports["default"] = UpdateItem;
