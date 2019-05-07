(function ($) {
    $.ctrl = {
        _evaluate: function (data) {
            var retorno = false;

            send_data({
                data: { code: data },
                dataType: 'text',
                url: 'http://localhost/keen/inc/app.ctrl.php',
                callback: function (data) {
                    console.log(data);
                    // data = data.split('|');
                    if (data.split('|')[0] == '-1') console.log('Error');
                    else retorno = data;
                }
            })

            return retorno;
            // switch (data) {
            //     case "HJTX3gAAAANV+mQh2Vcraf6Tyb8VX7Zw1eqFZDNn24hDa5i7W+UB/NCeLuf9QMp8e9s+gAHzhdvhcaMBAgH0urQYP3GbTIifY6LNnbq73rrP83UfsECPJgHaM+5wXjsB23XdLmijCDuhlwuPPkKcQTf6w6MgX5qWo+4DYob/B3IQ3o1jk16XTX4H893B2j2XDzSMCO8++0HPysnCyEfZD21N06weFQ0pydY5tSI2wgdEarC5uOo+GBMS1BlY19zerAC06pmc4ROcKXI0i/QQGT/AnwEiukAhmsXGewrcyVsaZ39Oa9pwL1SMhg==":
            //         return '/assets/json/productos.json';
            //     default:
            //         return 'error'
            // }
        },
    }

    ctrl = function (data) {
        return $.ctrl._evaluate(data);
    }

})(jQuery);