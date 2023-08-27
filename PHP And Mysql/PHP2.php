<!DOCTYPE html>
<html lang="en">

<head>
    <title>PHP 2</title>
</head>

<body>
    <?php

    $str = "This This This";
    echo $str . "<br>";

    $lenn = strlen($str);

    echo "The Length Of This String is " . $lenn . ". Thank You <br>";
    echo "The Number Of Words In This String is " . str_word_count($str) . ". Thank You <br>";
    echo "The Reversed String is " . strrev($str) . ". Thank you <br>";
    echo "The Search For is In This String is " . strpos($str, "is") . ". Thank You <br>";
    echo "The Replaced String is " . str_replace("is", "at", $str) . ". Thank You <br>";

    ?>
</body>

</html>