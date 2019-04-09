webpackHotUpdate(0,{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _lazy = __webpack_require__(42);

var _lazy2 = _interopRequireDefault(_lazy);

var _swiperMin = __webpack_require__(44);

var _swiperMin2 = _interopRequireDefault(_swiperMin);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this2 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this2.state = {
            FengJingImgsUrl: ["http://www.xyji.top/img/web1.jpg", "http://www.xyji.top/img/web2.jpg"],
            jishuImgsUrl: ["http://www.xyji.top/img/jishu1.png", "http://www.xyji.top/img/jishu2.png"],
            lifeImgsUrl: ["http://www.xyji.top/img/life1.jpg", "http://www.xyji.top/img/life2.jpg", "http://www.xyji.top/img/life3.jpg"],
            lvyouImgsUrl: ["http://www.xyji.top/img/lvyou1.jpg", "http://www.xyji.top/img/lvyou3.jpg", "http://www.xyji.top/img/lvyou2.jpg", "http://www.xyji.top/img/lvyou4.jpg", "http://www.xyji.top/img/lvyou5.jpg", "http://www.xyji.top/img/lvyou6.jpg", "http://www.xyji.top/img/lvyou7.jpg", "http://www.xyji.top/img/lvyou8.jpg"],
            navList: ["首页", "个人简历", "爱技术", "爱生活", "爱旅游"],
            navIndex: 0,
            navTitle: ["个人简历", "爱技术", "爱生活", "爱旅游"],
            swipers: []
        };
        return _this2;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this,
                clientH = $(window).height(),
                navOne = _this.refs.navOne.offsetTop,
                navTwo = _this.refs.navTwo.offsetTop,
                navThree = _this.refs.navThree.offsetTop,
                navFour = _this.refs.navFour.offsetTop;
            $(window).scroll(function () {
                _lazy2.default.Load();
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                //console.log("scrollTop:"+scrollTop+',navOne:'+navOne+',navTwo:'+navTwo+',navThree:'+navThree+',navFour:'+navFour);
                if (scrollTop > 0 && scrollTop >= navOne - clientH / 2 && scrollTop < navTwo) {
                    _this.setState({
                        navIndex: 1
                    });
                } else if (scrollTop >= navTwo - clientH / 2 && scrollTop < navThree) {
                    _this.setState({
                        navIndex: 2
                    });
                } else if (scrollTop >= navThree - clientH / 2 && scrollTop < navFour) {
                    _this.setState({
                        navIndex: 3
                    });
                } else if (scrollTop >= navFour - clientH / 2) {
                    _this.setState({
                        navIndex: 4
                    });
                } else {
                    _this.setState({
                        navIndex: 0
                    });
                }
            });
            // if($(".swiper-container").length > 0){
            //     var _swipers = [];
            //     $(".swiper-container").each(function(){
            //         var mySwiper = new Swiper('.swiper-container', {
            //             autoplay:5000,
            //             speed:500,
            //             autoplayDisableOnInteraction :false
            //         });
            //         _swipers.push(mySwiper);
            //     });
            //     _this.setState({
            //         swipers:_swipers
            //     });
            // }
            //为滚动轴绑定图片懒加载事件        
            setTimeout(function () {
                _lazy2.default.Load();
            }, 10); //默认配置懒加载
        }
    }, {
        key: 'navTab',
        value: function navTab(index) {
            var _this = this,
                clientH = $(window).height(),
                navOne = _this.refs.navOne.offsetTop,
                navTwo = _this.refs.navTwo.offsetTop,
                navThree = _this.refs.navThree.offsetTop,
                navFour = _this.refs.navFour.offsetTop;
            switch (index) {
                case 1:
                    window.scrollTo(0, navOne - clientH / 6);
                    break;
                case 2:
                    window.scrollTo(0, navTwo - clientH / 6);
                    break;
                case 3:
                    window.scrollTo(0, navThree - clientH / 6);
                    break;
                case 4:
                    window.scrollTo(0, navFour - clientH / 6);
                    break;
                default:
                    window.scrollTo(0, 0);
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            return _react2.default.createElement(
                'div',
                { className: 'cmr-home' },
                _react2.default.createElement(
                    'section',
                    { className: 'head-nav' },
                    _this.state.navList.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: "nav" + index, onClick: _this.navTab.bind(_this, index), className: _this.state.navIndex == index ? "nav-item active" : "nav-item" },
                            item
                        );
                    })
                ),
                _react2.default.createElement('div', { className: 'head-height' }),
                _react2.default.createElement(
                    'div',
                    { className: 'intitle' },
                    _react2.default.createElement(
                        'div',
                        { className: 'in-text' },
                        '\u6211\u53EBNight\uFF0C\u662F\u4E00\u540D\u524D\u7AEF\u5DE5\u7A0B\u5E08'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'in-text' },
                        '\u7231\u6280\u672F\uFF0C\u7231\u751F\u6D3B\uFF0C\u7231\u65C5\u6E38\uFF0C\u7231\u8FD0\u52A8'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'head-img' },
                    _react2.default.createElement(
                        'div',
                        { className: 'swiper-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'swiper-wrapper' },
                            _this.state.FengJingImgsUrl.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: "img" + index, className: 'swiper-slide' },
                                    _react2.default.createElement('img', { 'data-src': item, className: 'blog-img' })
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-title', ref: 'navOne' },
                    this.state.navTitle[0]
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-info' },
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u59D3\u540D\uFF1A\u738B\u5409'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u5B66\u5386\uFF1A\u5927\u4E13'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u7C4D\u8D2F\uFF1A\u676D\u5DDE'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u4ECE\u4E8B\uFF1A\u524D\u7AEF\u5F00\u53D1\uFF083\u5E74\uFF09'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u7535\u8BDD\uFF1A13867158100'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            'mail\uFF1Awangji817@126.com'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u6BD5\u4E1A\uFF1A7\u5E74'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text' },
                            '\u5728\u804C\uFF1A\u6B66\u6C49\u4F70\u94A7\u57CE\uFF08\u5728\u676D\uFF09'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content-desc' },
                        '\u8BE6\u7EC6\u4ECB\u7ECD\uFF1A',
                        _react2.default.createElement(
                            'div',
                            { className: 'desc-indent' },
                            '14\u5E74\u4ECE\u4E8B\u79FB\u52A8\u7AEF\u524D\u7AEF\u5F00\u53D1\uFF0C\u4E3B\u8981\u8D1F\u8D23\u516C\u53F8\u73B0\u7F51\u4E00\u7EA7\u4E8C\u7EA7\u9875\u9762\uFF0C\u5BA2\u6237\u7AEFH5\u9875\u9762\uFF0C\u5FAE\u4FE1\u56DE\u6D41\u9875\u9762\uFF0C\u5BA2\u6237\u7AEF\u5206\u4EAB\uFF0Cwap\u6D4F\u89C8\u5668\u5524\u8D77\u5BA2\u6237\u7AEF\uFF0CFIS\u8D44\u6E90\u6574\u5408\u7BA1\u7406\u3002'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content-desc' },
                        '\u804C\u4E1A\u6280\u80FD\uFF1A',
                        _react2.default.createElement(
                            'div',
                            { className: 'desc-indent' },
                            'HTML5+Css3+Javascript+jQuery|Zepto+PhotoShop+Fiddler+React+Sass+gulp+Freemarker+FIS+IconFont+Sublime'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content-desc' },
                        '\u81EA\u6211\u8BC4\u4EF7\uFF1A',
                        _react2.default.createElement(
                            'div',
                            { className: 'desc-indent' },
                            '\u5FC3\u6001\u597D\u3001\u81EA\u5F8B\u6027\u5F3A\uFF1B\u5177\u6709\u826F\u597D\u7684\u8BED\u8A00\u6C9F\u901A\u80FD\u529B\u53CA\u4E00\u5B9A\u7684\u6587\u5B57\u529F\u5E95\uFF1B\u61C2\u670D\u4ECE\uFF0C\u91CD\u914D\u5408\uFF0C\u5177\u5907\u826F\u597D\u7684\u65F6\u95F4\u7BA1\u7406\uFF0C\u4EE3\u7801\u7BA1\u7406\uFF1B\u559C\u6B22\u7814\u7A76\uFF0C\u5B66\u4E60\u65B0\u4E1C\u897F\uFF0C\u9002\u5E94\u80FD\u529B\u5F3A\u3002'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-title', ref: 'navTwo' },
                    this.state.navTitle[1]
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'swiper-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'swiper-wrapper' },
                            _this.state.jishuImgsUrl.map(function (item, index) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: "jishu" + index, className: 'swiper-slide content-info' },
                                    _react2.default.createElement('img', { 'data-src': item, className: 'jishu-img' })
                                );
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-title', ref: 'navThree' },
                    this.state.navTitle[2]
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'life-info' },
                        _this.state.lifeImgsUrl.map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: "life" + index, className: 'swiper life-swiper' },
                                _react2.default.createElement('img', { 'data-src': item, className: 'life-img' })
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-title', ref: 'navFour' },
                    this.state.navTitle[3]
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'lvyou-info' },
                        _this.state.lvyouImgsUrl.map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: "lvyou" + index, className: 'swiper lvyou-swiper' },
                                _react2.default.createElement('img', { 'data-src': item, className: 'lvyou-img' })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/nightGulp/react-project/component/base/swiper.min.js: Unexpected token (2:1)\n\n  1 | var Swiper = {\n> 2 | \t(function () {\n    | \t^\n  3 |     'use strict';\n  4 |     var $;\n  5 |     /*===========================\n");

/***/ })

})