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
var DialogAddItem = /** @class */ (function (_super) {
    __extends(DialogAddItem, _super);
    function DialogAddItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            idProduct: '', afterSale: 1000, beforSale: 0, imgProduct: '', nameProduct: '', percentageDiscount: 0
        };
        return _this;
    }
    DialogAddItem.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: 'mark', style: { display: this.props.showDialog ? 'block' : 'none' } },
                react_1["default"].createElement("div", { className: "dialog-add-shopee" },
                    react_1["default"].createElement("h1", { className: "title" }, "Nh\u1EADp th\u00F4ng tin s\u1EA3n ph\u1EA9m"),
                    react_1["default"].createElement("div", { className: "item" },
                        react_1["default"].createElement("label", { htmlFor: "name" }, "T\u00EAn s\u1EA3n ph\u1EA9m"),
                        react_1["default"].createElement("input", { onChange: function (event) {
                                console.log(event.target.value);
                                _this.setState({
                                    nameProduct: event.target.value
                                });
                            }, type: "text", id: "nameProduct", name: "name", placeholder: "Nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m" })),
                    react_1["default"].createElement("div", { className: "item" },
                        react_1["default"].createElement("label", { htmlFor: "afterSale" }, "Gi\u00E1 b\u00E1n"),
                        react_1["default"].createElement("input", { onChange: function (event) {
                                console.log(event.target.value);
                                _this.setState({
                                    beforSale: event.target.valueAsNumber
                                });
                            }, type: "number", id: "afterSale", name: "afterSale", placeholder: "Nh\u1EADp gi\u00E1 b\u00E1n" })),
                    react_1["default"].createElement("div", { className: "item" },
                        react_1["default"].createElement("label", { htmlFor: "beforSale" }, "Gi\u00E1 g\u1ED1c"),
                        react_1["default"].createElement("input", { onChange: function (event) {
                                console.log(event.target.value);
                                _this.setState({
                                    afterSale: event.target.valueAsNumber
                                });
                            }, type: "number", id: "beforSale", name: "beforSale", placeholder: "Nh\u1EADp gi\u00E1 g\u1ED1c" })),
                    react_1["default"].createElement("div", { className: "item" },
                        react_1["default"].createElement("label", { htmlFor: "imgProduct" }, "H\u00ECnh \u1EA3nh s\u1EA3n ph\u1EA9m"),
                        react_1["default"].createElement("input", { onChange: function (event) {
                                console.log(event.target.value);
                                _this.setState({
                                    imgProduct: event.target.value
                                });
                            }, type: "url", id: "imgProduct", name: "imgProduct", placeholder: "Nh\u1EADp link h\u00ECnh \u1EA3nh s\u1EA3n ph\u1EA9m (Khuy\u1EBFn kh\u00EDch \u1EA3nh d\u1EA1ng h\u00ECnh vu\u00F4ng)" })),
                    react_1["default"].createElement("div", { className: "button-item" },
                        react_1["default"].createElement("button", { className: "btn btn-primary", onClick: function (event) {
                                var giaTruoc = _this.state.beforSale || 1;
                                var giaSau = _this.state.afterSale || 1;
                                var gia = (giaTruoc / giaSau) * 100;
                                var objShopee = {
                                    idProduct: new Date().getTime(),
                                    afterSale: _this.state.afterSale,
                                    beforSale: _this.state.beforSale,
                                    imgProduct: _this.state.imgProduct,
                                    nameProduct: _this.state.nameProduct,
                                    percentageDiscount: gia
                                };
                                var localForMe = localStorage.getItem("Shopee");
                                var listShopee = JSON.parse(localForMe || "[]");
                                listShopee.push(objShopee);
                                localStorage.setItem("Shopee", JSON.stringify(listShopee));
                                alert('Chúc mừng mày đả thêm thành công');
                                window.location.href = "http://localhost:3000/WareHouse";
                            } }, "T\u1EA1o s\u1EA3n ph\u1EA9m m\u1EDBi"),
                        react_1["default"].createElement("button", { className: "btn btn-outline", onClick: function () {
                                _this.props.onChangeExit(_this.props.showDialog);
                            } }, "H\u1EE7y"))))));
    };
    return DialogAddItem;
}(react_1.Component));
exports["default"] = DialogAddItem;
