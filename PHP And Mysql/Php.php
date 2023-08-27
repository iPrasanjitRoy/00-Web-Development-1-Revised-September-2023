<!DOCTYPE html>
<html lang="en">

<head>
    <title>PHP</title>
</head>

<body>

    <?php
    echo "Hello World!";


    $variable1 = 5;
    $variable2 = 5;
    echo $variable1;
    echo $variable2;

    // Arithmetic Operators  
    echo "<br>";
    echo "The Value Of Varible1 + Variable2 is ";
    echo $variable1 + $variable2;
    echo "<br>";
    echo "The Value Of Varible1 - Variable2 is ";
    echo $variable1 - $variable2;
    echo "<br>";
    echo "The Value Of Varible1 * Variable2 is ";
    echo $variable1 * $variable2;
    echo "<br>";
    echo "The Value Of Varible1 / Variable2 is ";
    echo $variable1 / $variable2;
    echo "<br>";

    echo "<br>";

    // Assignment Operators 
    
    $variable1 = 100;
    $variable2 = $variable1;
    echo "The Value Of Variable1: " . $variable1 . "<br>";
    $variable2 += 10;
    echo "The Value Of Variable2 After Adding 10: " . $variable2 . "<br>";
    $variable2 -= 10;
    echo "The Value Of Variable2 After Subtracting 10: " . $variable2 . "<br>";
    $variable2 *= 10;
    echo "The Value Of Variable2 After Multiplying by 10: " . $variable2 . "<br>";
    $variable2 /= 10;
    echo "The Value Of Variable2 After Dividing by 10: " . $variable2 . "<br>";
    echo "<br>";

    echo "<br>";
    // Comparison Operators 
    
    echo "The Value Of 1==4 is ";
    echo var_dump(1 == 4);
    echo "<br>";

    echo "The Value Of 1!=4 is ";
    echo var_dump(1 != 4);
    echo "<br>";

    echo "The Value Of 1>=4 is ";
    echo var_dump(1 >= 4);
    echo "<br>";

    echo "The Value Of 1<=4 is ";
    echo var_dump(1 <= 4);
    echo "<br>";



    // Increment/Decrement Operators 
    // echo $variable1++;
    // echo $variable1--;
    // echo ++$variable1;
    echo --$variable1;
    echo "<br>";
    echo $variable1;


    // Logical Operator
    // and (&&)
    // or (||)
    // xor 
    // !
    
    // $myVar = (true and true);
    // $myVar = (false and true);
    // $myVar = (false and false);
    // $myVar = (true and false);
    // $myVar = (true or false);
    
    // $myVar = (true xor true);
    // $myVar = (false and true);
    // $myVar = (false xor false);
    $myVar = (true and false);
    echo "<br>";
    echo var_dump($myVar);

    echo "<br>";
    // PHP Constant 
    define("PI", 3.14159);
    define("GREETING", "Hello, World!");
    echo PI;
    echo "<br>";
    echo GREETING;
    echo "<br>";


    // Conditional Statements
    
    $age = 6;
    if ($age > 18) {
        echo "You Can Go To The Party";
    } else if ($age == 6) {
        echo "You Are 6 Years Old";
    } else {
        echo "You Can Not Go To The Party";
    }
    echo "<br>";


    // Arrays
    $languages = array("Python", "C++", "PHP", "NodeJs");
    echo count($languages);
    echo "<br>";
    echo $languages[0];


    echo "<br>";

    // Loops in PHP
    $a = 0;
    while ($a <= 10) {
        echo "<br>The Value Of a is: ";
        echo $a;
        $a++;
    }

    echo "<br>";

    $a = 0;
    while ($a < count($languages)) {
        echo "<br>The Value Of Language is: ";
        echo $languages[$a];
        $a++;
    }
    echo "<br>";



    // Do While loop 
    $a = 200;
    do {
        echo "<br>The Value Of a is: ";
        echo $a;
        $a++;
    } while ($a < 10);

    echo "<br>";

    // For loop  
    for ($a = 0; $a < 10; $a++) {
        echo "<br>The Value Of a From The For loop is: ";
        echo $a;
    }

    echo "<br>";

    foreach ($languages as $value) {
        echo "<br>The Value From foreach loop is ";
        echo $value;
    }

    echo "<br>";


    // Function 
    function print_number($number)
    {
        echo "<br>Your Number is ";
        echo $number;
    }

    print_number(50);

    echo "<br>";





    ?>
    <div>
        <h1> Hello All! </h1>
    </div>
</body>

</html>


