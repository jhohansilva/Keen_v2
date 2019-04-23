! function ($) {
    "use strict";

    var Productos = function () {
        this.$body = $("body")
    };

    Productos.prototype.init = function () {
        console.log(this.$body);
        var codItem = getParam('id');
        $('#img-prev, #img-prev-thumb').attr('src','assets/images/products/' + codItem + '.jpg');
    };


    $.Productos = new Productos, $.Productos.Constructor = Productos;

}(window.jQuery),

    function ($) {
        "use strict";
        $.Productos.init()

    }(window.jQuery);