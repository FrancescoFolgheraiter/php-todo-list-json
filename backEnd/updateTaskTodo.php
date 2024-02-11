<?php

    //recupero i dati dal file json che ho creato
    $contentDataJson = file_get_contents("myData.json");
   
    //trasformo attraverso il decode i file obj in array 
    $contentData = json_decode($contentDataJson, true);
   
    //converto la stringa done in tipo booleano assegnandola ad una variabilew
    $doneBoolean = ($_POST['done'] === "true") ? true : false;
    //creo il nuovo task come array da inserire successivamente
   
    $updateTask = [
        'name' => $_POST['name'],
        'done' => $doneBoolean 
    ];
    var_dump("questo è l'elemnto". $updateTask);
    //recupero l'indice della voce da eliminare
    $index = intval($_POST['indice']);
    var_dump($index);
    //aggiungo ai data il nuovo task
    $contentData[$index] = $updateTask;
    //riconverto i miei data array in json
    $newContentDataJson = json_encode($contentData);
    //scrivo nel file json
    file_put_contents("myData.json", $newContentDataJson);

    var_dump($contentData)
?>