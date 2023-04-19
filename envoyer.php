<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // récupérer les données du formulaire et nettoyer les entrées
    $nom = filter_var($_POST["nom"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // vérifier que l'adresse email est valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Adresse email invalide.");
    }

    // construire le message
    $sujet = "Nouveau message de $nom";
    $contenu = "Nom: $nom\nEmail: $email\nMessage:\n$message";

    // envoyer le message
    $destinataire = "nicaux95@gmail.com";
    $headers = "From: $nom <$email>";

    if (mail($destinataire, $sujet, $contenu, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}

?>
