<!DOCTYPE html>
<html>
<head>
	<title>techmsrit</title>
</head>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<body>
	
	<h1>Tech Msrit</h1>


	<?php

	$myfile = fopen("donors.txt", "a") or die("Unable to open file!");
// $txt = "Vinyas\n";
	fwrite($myfile, "\n");


	$txt = $_GET["name"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["blood"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["age"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["gender"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["resident"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["student"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["contact"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");

	$txt = $_GET["email"];
	fwrite($myfile, $txt);
	fwrite($myfile, "\n");



	fclose($myfile);

	?>
	<?php echo "Registered\n"; ?>
	<br>

	<div style="padding-left:20px;">
		<a href="https://www.techmsrit.tk/blood_donor.html" class="btn btn-pill btn-primary">Return</a>

	</div>


</body>
</html>