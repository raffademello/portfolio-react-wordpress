<?php


require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

$Template;
$TemplateDir = "enviaForm/";

//$mail->SMTPDebug = 2;                 // Habilita modo debug na sa�da

$mail->isSMTP();                        // Setar o uso do SMTP

$mail->Host = 'smtp.kinghost.net';  	// Servidor smtp 

$mail->SMTPAuth = true;                 // Habilita a autentica��o do form

$mail->Username = 'noreply@studioepirea.com.br';       // Conta de e-mail que realizar� o envio

$mail->Password = 'epirea2016';       // Senha da conta de e-mail

//$mail->SMTPSecure = 'tls';            // Habilitar uso do TLS (plesk 11.5 ou utilizando contas do Gmail)

$mail->Port = 587;                       // Porta de conex�o 

$mail->From = 'noreply@studioepirea.com.br'; 			// e-mail From deve ser o mesmo de "username" (contadeEmail)

$mail->FromName = 'No Reply'; 				// Nome que ser� exibido ao receber a mensagem. 

$mail->addAddress('contato@studioepirea.com.br', 'noreply'); // Destinat�rio 

//$mail->addAddress('contato@erikalyma.hospedagemdesites.ws');               	// Nome do destinat�rio

//$mail->addReplyTo('info@example.com', 'Information');  	//Responder para 

//$mail->addCC('cc@example.com'); // Adicionar c�pia para o recebimento. 

//$mail->addBCC('bcc@example.com'); // Adicionar c�pia oculta para o recebimento.



//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contato via website';  //Assunto da Mensagem

$mail->Body    = "Nome:".utf8_decode($_POST['nome'])."<br>E-mail:" ."".utf8_decode($_POST['email'])."<br>"."Mensagem: <br>".utf8_decode($_POST['mensagem']); // Corpo da mensagem

//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


if(!$mail->send()) {

	echo 'Message could not be sent.';

	echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {

	echo 'Mensagem enviada com sucesso !';

}



?>





