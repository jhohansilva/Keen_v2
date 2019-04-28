! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body")
    };

    $(document).on('click', '[data-href]', function () {
        var lnk = $(this).data().href;        
        window.location.href = (location.port ? 'productos.html' : 'productos') + '?ref=' + lnk;
    })

    Dashboard.prototype.init = function () {
        _getProductos();
    };

    var _getProductos = function () {
        get_data({
            url: get_url(ctrl('HJTX3gAAAANV+mQh2Vcraf6Tyb8VX7Zw1eqFZDNn24hDa5i7W+UB/NCeLuf9QMp8e9s+gAHzhdvhcaMBAgH0urQYP3GbTIifY6LNnbq73rrP83UfsECPJgHaM+5wXjsB23XdLmijCDuhlwuPPkKcQTf6w6MgX5qWo+4DYob/B3IQ3o1jk16XTX4H893B2j2XDzSMCO8++0HPysnCyEfZD21N06weFQ0pydY5tSI2wgdEarC5uOo+GBMS1BlY19zerAC06pmc4ROcKXI0i/QQGT/AnwEiukAhmsXGewrcyVsaZ39Oa9pwL1SMhg==')),
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