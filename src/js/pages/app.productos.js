! function ($) {
    "use strict";

    var Productos = function () {
        this.$param = get_param('ref');
    };

    Productos.prototype.init = function () {
        $.ajax({
            method: 'POST',
            data: null,
            // dataType: 'json',
            url: 'http://localhost/keen/inc/clients/client.productos.php',
        }).done(function (data) {
            console.log(data);
        });
        // if (consulta) _llenarDatos(consulta);
    };

    var _llenarDatos = function (data) {
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
        $('#price').html(valor);

        // Descripción
        $('#text-descrip').html(descripcion);
    }


    $.Productos = new Productos, $.Productos.Constructor = Productos;

}(window.jQuery),

    function ($) {
        "use strict";
        $.Productos.init()

    }(window.jQuery);