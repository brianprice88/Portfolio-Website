webpackJsonp([3],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Home;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
    return _react2.default.createElement(
        'div',
        { id: 'Home' },
        _react2.default.createElement(
            'div',
            { className: 'HomeHeader' },
            _react2.default.createElement(
                'h1',
                null,
                'Brian Price'
            ),
            _react2.default.createElement(
                'h2',
                null,
                'Software Engineer'
            ),
            _react2.default.createElement('img', { src: 'assets/picture.jpg', alt: 'picture of me' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'IconsRow' },
            _react2.default.createElement(
                'div',
                { className: 'Iconscol' },
                _react2.default.createElement(
                    'a',
                    { href: 'https://linkedin.com/in/brian-price88', target: '_blank' },
                    _react2.default.createElement('img', { src: 'assets/Linkedin.svg', alt: 'LinkedIn logo' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Iconscol', id: 'Icon2' },
                _react2.default.createElement(
                    'a',
                    { href: 'https://github.com/brianprice88', target: '_blank' },
                    _react2.default.createElement('img', { src: 'assets/GitHub.png', alt: 'Github logo' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'Iconscol', id: 'Icon3' },
                _react2.default.createElement(
                    'a',
                    { href: 'https://angel.co/u/brian-price-15', target: '_blank' },
                    _react2.default.createElement('img', { src: 'assets/AngelList.png', alt: 'AngelList logo' })
                )
            )
        )
    );
}

/***/ })

});