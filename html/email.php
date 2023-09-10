
<?php

    $naam = $_POST['naam'];

    $email= $_POST['email'];

    $onderwerp= $_POST['onderwerp'];

    $to = "bob190404@gmail.com";

    $bericht = $_POST['bericht'];

    $txt = $naam . "\r\n" . $email . "\r\n" . $bericht;

    $headers = "From: bob190404@gmail.com" ;

    $txt2 = "Bedankt voor je vraag, we komen zo snel mogelijk bij je terug." . "\r\n" . "\r\n" . $naam . "\r\n" . $email . "\r\n" . "\r\n" . $bericht;

    if($email!=NULL){

        mail($to,$onderwerp,$txt,$headers);

        mail($email,$onderwerp,$txt2,$headers);

    }

 

header("Location: ../index.html");

?>