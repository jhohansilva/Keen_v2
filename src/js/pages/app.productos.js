! function ($) {
    "use strict";

    var Productos = function () {
        this.$param = get_param('ref');
    };

    Productos.prototype.init = function () {
        send_data({
            data: { item: this.$param },
            dataType: 'text',
            method: 'request001',
            url_ctrl: "HJTX3gAAAAMMsHUwbvXlL79CUiZY4z5Jo+sr54I3/1GLddUFZ1dxV8ETQuuo2tBScaZ6Tko9C8mpJG/hyswILqyvvC8qlWeziQtH50xiPHEIdzP39SBgEkxXWiCVIU2k8r0WkLzckxn3m0q5+GQUfg8AKvSOoAiwqAxK2ZkuMcx8dJeyQZXYqQhXIDB9bVKi4J/aEFsFqSxnTfipXRz/v8OCHOqOgoq+StZYaC4gvCkqPOCbJfEFy5rL7P+deRgvOZi91nQr5K3ns3Y2mJlFFV1NxNhp6BQBsYbJLOGK7Vum710VxCszR0vwheni8Y+xMM4V8CY=",
            callback: function (data) {
                console.log(data);
            }
        })

        // var consulta = busqueda('productos', 'Id', this.$param)
        // if (consulta) _llenarDatos(consulta);
    };

    var _llenarDatos = function (data) {
        console.log(data)
        var titulo = data.Titulo.trim(),
            previa = data.Previa.trim(),
            presentacion = data.Presentacion.trim() || 'N/A',
            valor = data.Valor.trim() || 'No disponible',
            descripcion = data.Descripcion.trim() || 'N/A';

        // Titulo
        $('#title').html(titulo);

        // Imagenes
        $('#img-prev, #img-prev-thumb')
            .attr({
                src: previa,
                title: titulo,
                alt: titulo
            });

        // Presentacion
        $('#presentation').html(presentacion);

        // Precio
        $('#price').html('$ ' + valor);

        // Descripción
        $('#text-descrip').html(descripcion);
    }


    $.Productos = new Productos, $.Productos.Constructor = Productos;

}(window.jQuery),

    function ($) {
        "use strict";
        $.Productos.init()

    }(window.jQuery);