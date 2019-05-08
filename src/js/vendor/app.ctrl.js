(function ($) {
    $.ctrl = {
        _evaluate: function (data) {
            var retorno = false;

            send_data({
                data: { code: data },
                dataType: 'text',
                url: 'http://localhost/keen/inc/app.ctrl.php',
                callback: function (data) {                    
                    // data = data.split('|');
                    if (data.split('|')[0] == '-1') console.log('Error');
                    else retorno = data;
                }
            })

            return retorno;
        },
    }

    ctrl = function (data) {
        return $.ctrl._evaluate(data);
    }

})(jQuery);