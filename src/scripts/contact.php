<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactmessage']) {
	$to = 'r-enter@yandex.ru'; // Your e-mail address here.
	$body = "\nИмя: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\n\n\nТел: {$_POST['contactcell']}
	\n\n\n{$_POST['contactmessage']}\n\n";
	mail($to, "Письмо с сайта", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>