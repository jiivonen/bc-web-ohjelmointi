<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Veikkaustililtä pankkitilille</title>
</head>
<body>
<?php
//haetaan tiedot lomakkeen kentistä
$nimi = htmlspecialchars($_POST["nimi"]);
$tnro = htmlspecialchars($_POST["tnro"]);
$maara = htmlspecialchars($_POST["maara"]);
 
print("<h1>Tilisiirron tiedot</h1>");
print("Nimi: ");
print($nimi);
print("<br>");
print("Tilinumero: ");
print($tnro);
print("<br>");
print("Määrä: ");
print($maara);
print("<p>");
 
?>
<a href="dom08.html">Takaisin lomakkeelle</a>
</body>
</html>