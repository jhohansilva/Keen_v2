<?php
require_once 'core/lib/nusoap.php';
require_once 'views/productos.view.php';

$server = new nusoap_server();

$namespace = 'http://localhost/keen/inc/webservice/server.php';

$server->configureWSDL('shopService', 'urn:shop');
$server->wsdl->schemaTargetNamespace = $namespace;

$server->register('consultarProducto_ind',
    [ 'item' => 'xsd:string'],
    ['data' => 'xsd:string'],
    'urn:shop',
    'urn:shop#consultarProducto_ind'
);

$server->service(file_get_contents("php://input"));
