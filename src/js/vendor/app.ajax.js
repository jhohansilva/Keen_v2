(function ($) {
    $.ruta_datos = {
        _init: function (type, data, url, callback) {
            switch (type) {
                case "get":
                    this._get(data, url, callback);
                    break;
                default:
                    $.NotificationApp.send("Error!", "Opción de consulta ajax sin definir", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
            }
        },

        _get: function (data, url, callback) {
            $.ajax({
                method: 'GET',
                data: data,
                dataType: 'json',
                url: url
            }).done(callback);
        }
    }

    get_data = function (config) {
        if (!config.data) config.data = null;
        if (!config.url) $.NotificationApp.send("Error!", "URL no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        else if (!config.callback) $.NotificationApp.send("Error!", "Función de retorno no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        else $.ruta_datos._init('get', config.data, config.url, config.callback);
    }

})(jQuery);