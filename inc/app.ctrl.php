<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$code = $_POST['code'];

switch ($code) {
    case "HJTX3gAAAANV+mQh2Vcraf6Tyb8VX7Zw1eqFZDNn24hDa5i7W+UB/NCeLuf9QMp8e9s+gAHzhdvhcaMBAgH0urQYP3GbTIifY6LNnbq73rrP83UfsECPJgHaM+5wXjsB23XdLmijCDuhlwuPPkKcQTf6w6MgX5qWo+4DYob/B3IQ3o1jk16XTX4H893B2j2XDzSMCO8++0HPysnCyEfZD21N06weFQ0pydY5tSI2wgdEarC5uOo+GBMS1BlY19zerAC06pmc4ROcKXI0i/QQGT/AnwEiukAhmsXGewrcyVsaZ39Oa9pwL1SMhg==":
        $out = "/assets/json/productos.json";
        break;
    case "HJTX3gAAAAMMsHUwbvXlL79CUiZY4z5Jo+sr54I3/1GLddUFZ1dxV8ETQuuo2tBScaZ6Tko9C8mpJG/hyswILqyvvC8qlWeziQtH50xiPHEIdzP39SBgEkxXWiCVIU2k8r0WkLzckxn3m0q5+GQUfg8AKvSOoAiwqAxK2ZkuMcx8dJeyQZXYqQhXIDB9bVKi4J/aEFsFqSxnTfipXRz/v8OCHOqOgoq+StZYaC4gvCkqPOCbJfEFy5rL7P+deRgvOZi91nQr5K3ns3Y2mJlFFV1NxNhp6BQBsYbJLOGK7Vum710VxCszR0vwheni8Y+xMM4V8CY=":
        $out = "http://localhost/keen/inc/clients.php";
        break;
    default:
        $out = '-1|Controlador no definido';
}

echo $out;
