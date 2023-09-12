
<?php

    $naam = $_POST['naam'];

    $email= $_POST['email'];

    $onderwerp= $_POST['onderwerp'];

    $to = "bob190404@gmail.com";

    $bericht = $_POST['bericht'];

    $txt = $naam . "\r\n" . $email . "\r\n" . $onderwerp . "\r\n" . $bericht;

    $txt2 = "beste " . $naam . "\r\n" . "Hoi! leuk dat je in contact wilt komen!! Ik heb uw vraag ontvangen en zal er binnenkort op terug komen!" . "\r\n" . "\r\n" . $email . "\r\n" . $onderwerp . "\r\n" . $bericht;

    if($email!=NULL){

        mail($to,$onderwerp,$txt);

        mail($email,$onderwerp,$txt2);

    }

 

header("Location: ../index.html");

?>