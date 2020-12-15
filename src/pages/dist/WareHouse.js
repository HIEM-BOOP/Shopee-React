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
var Header_1 = require("../components/home/Header");
var DialogAddItem_1 = require("../components/warehouse/DialogAddItem");
var WareHouseProduct_1 = require("../components/warehouse/WareHouseProduct");
var UpdateItem_1 = require("../components/warehouse/UpdateItem");
var warehouse = /** @class */ (function (_super) {
    __extends(warehouse, _super);
    function warehouse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showDialog: false,
            showDialogUppdate: false,
            ShoppeListPhone: [],
            showDialogUppdateID: ''
        };
        var LocalPhone = localStorage.getItem('Shopee');
        var LocalShooppe = JSON.parse(LocalPhone || '[]');
        _this.state = {
            showDialog: false,
            showDialogUppdate: false,
            ShoppeListPhone: LocalShooppe,
            showDialogUppdateID: ''
        };
        console.log(_this.state.ShoppeListPhone);
        return _this;
    }
    warehouse.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Header_1["default"], null),
            react_1["default"].createElement("div", { className: "them-sp" },
                react_1["default"].createElement("div", { className: "container" },
                    react_1["default"].createElement("div", { className: "content" },
                        react_1["default"].createElement("div", { className: "addProduct" },
                            react_1["default"].createElement("h1", { className: "title" }, "DANH S\u00C1CH S\u1EA2N PH\u1EA8M TRONG KHO"),
                            react_1["default"].createElement("button", { onClick: function (event) {
                                    _this.setState({
                                        showDialog: true
                                    });
                                }, className: "btn btn-primary" },
                                "Th\u00EAm s\u1EA3n ph\u1EA9m  ",
                                " "))))),
            this.state.showDialog == true && react_1["default"].createElement(DialogAddItem_1["default"], { showDialog: this.state.showDialog, onChangeExit: function (exit) {
                    _this.setState({
                        showDialog: false
                    });
                } }),
            react_1["default"].createElement("div", { className: 'products' },
                react_1["default"].createElement(WareHouseProduct_1["default"], { onChangeDialogID: function (event) {
                        _this.setState({ showDialogUppdateID: event });
                    }, ShoppeListPhone: this.state.ShoppeListPhone, onChangeDialogUpdate: function (event) {
                        _this.setState({ showDialogUppdate: true });
                    } })),
            this.state.showDialogUppdate == true && react_1["default"].createElement(UpdateItem_1["default"], { onChangeExitDiaLogUpdate: function (event) {
                    _this.setState({ showDialogUppdate: false });
                }, propsProductID: this.state.showDialogUppdateID })));
    };
    return warehouse;
}(react_1.Component));
exports["default"] = warehouse;
