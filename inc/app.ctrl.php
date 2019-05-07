<?php
header("Access-Control-Allow-Origin: *");

$code = $_POST['code'];

switch ($code) {
    case "HJTX3gAAAANV+mQh2Vcraf6Tyb8VX7Zw1eqFZDNn24hDa5i7W+UB/NCeLuf9QMp8e9s+gAHzhdvhcaMBAgH0urQYP3GbTIifY6LNnbq73rrP83UfsECPJgHaM+5wXjsB23XdLmijCDuhlwuPPkKcQTf6w6MgX5qWo+4DYob/B3IQ3o1jk16XTX4H893B2j2XDzSMCO8++0HPysnCyEfZD21N06weFQ0pydY5tSI2wgdEarC5uOo+GBMS1BlY19zerAC06pmc4ROcKXI0i/QQGT/AnwEiukAhmsXGewrcyVsaZ39Oa9pwL1SMhg==":
        $out = "/assets/json/productos.json";
        break;
    default:
        $out = '-1|Controlador no definido';
}

echo $out;
