<?php
	include("Mail.php");

	$contentOpen = "<div style='width:100%;height:100%;text-align:center;vertical-align:middle'>";
	$contentClose = "</div>";

	// Purchase Order details
	$customer_email = htmlspecialchars($_POST['customer_email']);
	$machine_id = $_POST['machine_id'];
	$bank = $_POST['bank'];
	$payment_date = $_POST['date'];


	// Read request
	$to = "pataoengineer@gmail.com";
	$subject = "Invoice received from ".$customer_email;
	$message = "Dear Tao, here we've got an order from the customer.\r\n\r\n".
				"Machine ID ==> ".$machine_id."\r\n".
				"Paid via ==> ".$bank."\r\n".
				"When ==> ".$payment_date."\r\n".
				"From ==> ".$customer_email;
	
	$headers["From"] = "sales@starcolon.com";
	$headers["To"] = "pataoengineer@gmail.com;tao@starcolon.com";
	$headers["Subject"] = "iCommerce payment order received";
	$headers["Content-Type"] = "text/plain";

	$smtpinfo["host"] = "mail.starcolon.com";
	$smtpinfo["auth"] = true;
	$smtpinfo["username"] = "support@starcolon.com";
	$smtpinfo["password"] = "vdvrwkj4VDVRWKJ$";

	$smtp = Mail::factory('smtp', $smtpinfo);

	$mail = $smtp->send($to, $headers, $message); 


	
	// Send an email confirmation to the administrator
	if (PEAR::isError($mail))
	{
		// Error sending an email
		echo $contentOpen."<span style='color:red'>Oops, we're unable to send a purchase order email now. You can send it later or directly submit your order to support@StarColon.com.</span>".$contentClose;

		echo $mail->getMessage();
	}
	else
	{
		// Send an acknowledge message to the user
		$to = $customer_email;
		$message = "Your purchase order has been submitted to support@StarColon.com successfully. \r\nWe will respond within 24 hours with a serial key for you. \r\n\r\nThank you for purchasing iCommerce, your best stock market simulator app.\r\n\r\nStarColon sales";
		$headers["Subject"] = "Your payment has been submitted to StarColon team";
		$headers["To"] = $customer_email;
		if (PEAR::isError($smtp->send($to, $headers, $message)))
		{
			echo $contentOpen."<span style='color:red'>Oops. There has been an issue while submitting your order. Please try again later or directly send your Machine ID to <b>support@starcolon.com</b></span>".$contentClose;
		}
		else
		{
			echo $contentOpen."<span style='color:darkgreen'>Your order has been submitted. We'll respond within 24 hours.</span>".$contentClose;
		}
	}
?>