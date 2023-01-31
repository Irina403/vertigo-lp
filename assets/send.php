$fio = $_POST['fio'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);

echo $fio;
echo "<br>";
echo $email;

mail("irinat403@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email."Телефон:".$tel."."Сообщение".$message.","From: irinat403@gmail.com \r\n");

if (mail("irinat403@gmail.comu", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email."Телефон:".$tel."."Сообщение".$message ,"From: irinat403@gmail.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}