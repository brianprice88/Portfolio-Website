webpackJsonp([4],{

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Error() {

  function closeError() {
    var error = document.getElementById('error');
    error.style.display = 'none';
  }

  return _react2.default.createElement(
    'div',
    { id: 'error' },
    _react2.default.createElement(
      'span',
      { className: 'closeerrorbtn', onClick: closeError },
      '\xD7'
    ),
    _react2.default.createElement(
      'strong',
      null,
      'Sorry, page not found'
    )
  );
};

/***/ })

});