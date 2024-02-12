<?php
   
    //recupero l'indice della voce da eliminare
    $index = [
        'indice' => intval($_POST['index'])
    ];

    //recupero i dati dal file json che ho creato
    $contentDataJson = file_get_contents("myData.json");
   
    //trasformo attraverso il decode i file obj in array 
    $contentData = json_decode($contentDataJson, true);
    //cancello la posizione [MANIPOLI I DATI]
    unset($contentData[$index['indice']]);

    //evito la modifica della mia struttura dati tramite questa fuznione
    //che butta le chiavi e non mi midifica la struttura
    $fixedContentData = array_values($contentData);
    //riconverto i dati in json
    $newContentDataJson = json_encode($fixedContentData);
    //scrivo nel file json
    file_put_contents("myData.json", $newContentDataJson);
  
?>