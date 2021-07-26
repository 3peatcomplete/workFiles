<?php

/* https://api.telegram.org/bot1322088230:AAHYwmS1eWyYdafZh3RiURFz8kz_lKZ-yb0/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "1322088230:AAHYwmS1eWyYdafZh3RiURFz8kz_lKZ-yb0";
$chat_id = "-453235925";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>