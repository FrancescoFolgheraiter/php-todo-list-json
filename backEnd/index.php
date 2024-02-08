<?php
    //recupero i dati dal file json che ho creato
    $contentData = file_get_contents("myData.json");
    //devo inserire nell'header della richiesta http che è di tipo json
    header("Content-Type: application/json");
    //stampo nella pagina php il content del file
    echo $contentData;
?>