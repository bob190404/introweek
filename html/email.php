
<?php

    $naam = $_POST['naam'];

    $email= $_POST['email'];

    $onderwerp= $_POST['onderwerp'];

    $to = $email;

    $bericht = $_POST['bericht'];

    $txt = $naam . "\r\n" . $email . "\r\n" . $onderwerp . "\r\n" . $bericht;

    $headers = "From: bob190404@gmail.com" ;

    $txt2 = $naam . "\r\n" . "Hoi! leuk dat je in contact wilt komen!! /r/n Ik heb uw vraag ontvangen en zal er binnenkort op terug komen!" . "\r\n" . "\r\n" . $email . "\r\n" . $onderwerp . "\r\n" . $bericht;

    if($email!=NULL){

        mail($to,$onderwerp,$txt,$headers);

        mail($email,$onderwerp,$txt2,$headers);

    }

 

header("Location: ../index.html");

?>