(function ($) {
    $.ruta_datos = {
        _init: function (type, config) {            
            $.ajax({
                method: type,
                data: config.data,
                dataType: config.dataType || 'json',
                url: config.url,
                async: false
            }).done(config.callback);
        }
    }

    get_data = function (config) {
        if (!config.data) config.data = null;
        if (!config.url) $.NotificationApp.send("Error!", "URL no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        else if (!config.callback) $.NotificationApp.send("Error!", "Función de retorno no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        else $.ruta_datos._init('GET', config);
    }

    send_data = function (config) {        
        if (!config.data) config.data = null;
        if (!config.url) $.NotificationApp.send("Error!", "URL no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        else if (!config.callback) $.NotificationApp.send("Error!", "Función de retorno no definida para la consulta", 'bottom-right', 'rgba(0,0,0,0.2)', 'error');
        else $.ruta_datos._init('POST', config);       
    }

})(jQuery);