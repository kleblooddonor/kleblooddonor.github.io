<?php
$myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
$txt = "Vinyas\n";
fwrite($myfile, $txt);
$txt = "Rushi\n";
fwrite($myfile, $txt);
fclose($myfile);
?>