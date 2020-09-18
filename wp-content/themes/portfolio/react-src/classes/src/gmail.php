<?php
require_once('PHPMailer.php');
require_once('SMTP.php');
require_once('Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['nome']) && !empty($_POST['nome'])){
    $nome = strip_tags(utf8_decode($_POST['nome']));
}
if(isset($_POST['email']) && !empty($_POST['email'])){
    $email = strip_tags(utf8_decode($_POST['email']));
}
if(isset($_POST['telefone']) && !empty($_POST['telefone'])){
    $telefone = strip_tags(utf8_decode($_POST['telefone']));
}
if(isset($_POST['mensagem']) && !empty($_POST['mensagem'])){
    $mensagem = strip_tags(utf8_decode($_POST['mensagem']));
}

$mail = new PHPMailer(true);

try {
	$mail->SMTPDebug = SMTP::DEBUG_SERVER;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'admin@rmsites.com.br';
	$mail->Password = 'pearlj[90]';
	$mail->Port = 587;

	$mail->setFrom('admin@rmsites.com.br');
	$mail->addAddress('raffa.demello@gmail.com');

	$mail->isHTML(true);
    $mail->Subject = utf8_decode('Contato - website');  //Assunto da Mensagem
    $mail->Body = '<html><body>'; 
    //$mail->Body .= '<h1>Pedido solicitado via website</h1>'; 
    $mail->Body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $mail->Body .= "<tr style='background: #eee;'><td><strong>Nome:</strong> </td><td>" . $nome . "</td></tr>";
    $mail->Body .= "<tr style='background: #eee;'><td><strong>E-mail:</strong> </td><td>" . $email . "</td></tr>";
    $mail->Body .= "<tr style='background: #eee;'><td><strong>Telefone:</strong> </td><td>" . $telefone . "</td></tr>";
    $mail->Body .= "<tr style='background: #eee;'><td><strong>Mensagem:</strong> </td><td>" . $mensagem . "</td></tr>";
    $mail->Body .= "</td></tr>";
    $mail->Body .= "</table>";
    $mail->Body .= '</body></html>'; 

	if($mail->send()) {
		echo 'Email enviado com sucesso';
	} else {
		echo 'Email nao enviado';
	}
} catch (Exception $e) {
	echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
}