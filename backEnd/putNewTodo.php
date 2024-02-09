<?php
    //recupero i dati dal file json che ho creato
    $contentDataJson = file_get_contents("myData.json");
   
    //trasformo attraverso il decode i file obj in array 
    $contentData = json_decode($contentDataJson, true);
   
    //creo il nuovo task come array da inserire successivamente
    $newTask = [
        'name' => $_POST['name'],
        'done' => false
    ];
    var_dump($newTask );
    //aggiungo ai data il nuovo task
    $contentData[] = $newTask;
    //riconverto i miei data array in json
    $newContentDataJson = json_encode($contentData);
    //scrivo nel file json
    file_put_contents("myData.json", $newContentDataJson);

    var_dump($contentData)
?>