webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*懒加载效果*/
var Lazy = {
    "Img": null,
    "getY": function getY(b) {
        var a = 0;
        if (b && b.offsetParent) while (b.offsetParent) {
            a += b.offsetTop, b = b.offsetParent;
        } else b && b.y && (a += b.y);
        return a;
    },
    "getX": function getX(b) {
        var a = 0;
        if (b && b.offsetParent) while (b.offsetParent) {
            a += b.offsetLeft, b = b.offsetParent;
        } else b && b.x && (a += b.X);
        return a;
    },
    "scrollY": function scrollY() {
        var a = document.documentElement;
        return self.pageYOffset || a && a.scrollTop || document.body.scrollTop || 0;
    },
    "scrollX": function scrollX() {
        var a = document.documentElement;
        return self.pageXOffset || a && a.scrollLeft || document.body.scrollLeft || 0;
    },
    "windowWidth": function windowWidth() {
        var a = document.documentElement;
        return self.innerWidth || a && a.clientWidth || document.body.clientWidth;
    },
    "windowHeight": function windowHeight() {
        var a = document.documentElement;
        return self.innerHeight || a && a.clientHeight || document.body.clientHeight;
    },
    "CurrentHeight": function CurrentHeight() {
        return Lazy.scrollY() + Lazy.windowHeight();
    },
    "CurrentWidth": function CurrentWidth() {
        return Lazy.scrollX() + Lazy.windowWidth();
    },
    "Load": function Load(d) {
        Lazy.Init();
        var f = Lazy.CurrentHeight(),
            b = Lazy.CurrentWidth();
        for (var _index = 0; _index < Lazy.Img.length; _index++) {
            var a = Lazy.Img[_index];
            $(a).attr("lazy") == undefined && $(a).attr("lazy", "n");
            if ($(a).attr("lazy") == "y") continue;
            /*$(a).bind("error", function() {
                this.id == "subject" ? $(this).attr("src", "") : $(this).attr("src", "http://wap.cmread.com/rbc/p/content/repository/ues/image/s109/nopic.png");
            });*/
            if (d == undefined || d == "" || d == null) {
                var c = Lazy.getY(a),
                    e = Lazy.getX(a);
                //e < b && c < f && (a.src = a.getAttribute("data-src"), $(a).attr("lazy", "y"), a.removeAttribute("data-src"));
                c < f && (a.src = a.getAttribute("data-src"), $(a).attr("lazy", "y"), a.removeAttribute("data-src"));
                $(a).attr("data-rel", e);
            } else if (d == "x") {
                var c = Lazy.getX(a);
                c < b && (a.src = a.getAttribute("data-src"), $(a).attr("lazy", "y"));
            }
        }
    },
    "Init": function Init() {
        var a = document.querySelectorAll("img[data-src]");
        Lazy.Img = a;
    }
};

exports.default = Lazy;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)))

/***/ })

})