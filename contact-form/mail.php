<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$message = $_POST['message'];
	$formcontent=" From: $name \n subject: $subject \n  Message: $message";
	$recipient = "ruian.rakib@gmail.com";
	$mobile = "Add Your mobile Here";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("location: thank.html")
?>