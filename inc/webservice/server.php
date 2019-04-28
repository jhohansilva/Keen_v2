<?php
require_once 'core/lib/nusoap.php';
require_once 'views/view.productos.php';

$server = new nusoap_server();

$namespace = 'http://localhost/keen/inc/webservice/server.php';

$server->configureWSDL('shopService', 'urn:shop');
$server->wsdl->schemaTargetNamespace = $namespace;

$server->register('consultarProductos',
    array(),
    array('data' => 'xsd:string'),
    'urn:shop',
    'urn:shop#consultarProductos'
);

$server->service(file_get_contents("php://input"));
