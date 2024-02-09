<?php
   
    //recupero l'indice della voce da eliminare
    $index = [
        'indice' => intval($_POST['index'])
    ];

    //recupero i dati dal file json che ho creato
    $contentDataJson = file_get_contents("myData.json");
   
    //trasformo attraverso il decode i file obj in array 
    $contentData = json_decode($contentDataJson, true);
    //aggiorno i dati nella posiuzione [MANIPOLI I DATI]
    //salvo il tipo di done
    $updateDone = $contentData[$index['indice']]['done'];
    $contentData[$index['indice']]['done'] = !($updateDone);

    //riconverto i dati in json
    $newContentDataJson = json_encode($contentData);
    //scrivo nel file json
    file_put_contents("myData.json", $newContentDataJson);
  
?>