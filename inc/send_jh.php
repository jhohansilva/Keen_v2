<?php
header("Access-Control-Allow-Origin: *");

$url = 'http://45.58.34.159/ecomerce/pedidos/dlls/M1001.DLL';

$data = array('importarhtml' => '800223811|1|0G10092S37077');

$options = array(
    'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
    ),
);
$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === false) { /* Handle error */}

// var_dump($result);
echo $result;
