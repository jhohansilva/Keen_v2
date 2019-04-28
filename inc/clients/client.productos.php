<?php
require_once '../webservice/core/lib/nusoap.php';

header("Access-Control-Allow-Origin: *");
//error_reporting(E_ERROR | E_PARSE);
$_WSDL = "http://localhost/keen/inc/webservice/server.php?wsdl";
$client = new nusoap_client($_WSDL, true);
$err = $client->getError();

if ($err) {
    print_r($err);
    exit();
} else {
    try {
        $result = $client->call('consultarProductos');
        print_r($result);
    } catch (Exception $e) {
        print_r('Error');
    }
}
