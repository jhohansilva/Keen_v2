<?php
    $url = 'http://192.168.0.100/pedidos/app/COMER114.dll';

    $data = array('datosh' => '90000103|ALM11|20190422');
    
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) { /* Handle error */ }
    
    // var_dump($result);
    echo $result;
?>