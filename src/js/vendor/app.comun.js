var get_url = function (dir) {
    return (location.port ? '' : '/keen/dist/') + dir;
}

function get_param(param) {
    return new URLSearchParams(window.location.search).get(param);
}

function busqueda(array, index, val) {
    var retornar = false;    
    switch (array) {
        case 'productos':
            get_data({
                url: get_url(ctrl('HJTX3gAAAANV+mQh2Vcraf6Tyb8VX7Zw1eqFZDNn24hDa5i7W+UB/NCeLuf9QMp8e9s+gAHzhdvhcaMBAgH0urQYP3GbTIifY6LNnbq73rrP83UfsECPJgHaM+5wXjsB23XdLmijCDuhlwuPPkKcQTf6w6MgX5qWo+4DYob/B3IQ3o1jk16XTX4H893B2j2XDzSMCO8++0HPysnCyEfZD21N06weFQ0pydY5tSI2wgdEarC5uOo+GBMS1BlY19zerAC06pmc4ROcKXI0i/QQGT/AnwEiukAhmsXGewrcyVsaZ39Oa9pwL1SMhg==')),
                callback: function (data) {
                    var productos = data.Productos;
                    for (var i in productos) {
                        if (index === 'Id') if (productos[i].Id == val) retornar = productos[i];
                    }
                }
            });
            break;
    }

    return retornar;
}