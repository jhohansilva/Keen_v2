! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body")
    };

    $(document).on('click', '[data="href"]', function () {
        console.log('test');
    })

    Dashboard.prototype.init = function () {
        _getProductos();
    };

    var _getProductos = function () {
        get_data({
            url: '/assets/json/productos.json',
            data: null,
            callback: _loadItems
        });
    }

    var _loadItems = function (data) {
        $('#pagination-container').pagination({
            dataSource: data.Productos,
            pageSize: 8,
            autoHidePrevious: true,
            autoHideNext: true,
            ulClassName: 'pagination pagination-rounded',
            callback: function (data, pagination) {
                var source = $('#template-item').html();
                var template = Handlebars.compile(source);
                var html = template(data);

                $('#data-container').html(html);
                _format_text_item();
            }
        })
    }

    var _format_text_item = function () {
        var p = $('.item-text p');
        var ks = $('.item-text').height();
        while ($(p).outerHeight() > ks) {
            $(p).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    }

    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard;

}(window.jQuery),

    function ($) {
        "use strict";
        $.Dashboard.init()

    }(window.jQuery);