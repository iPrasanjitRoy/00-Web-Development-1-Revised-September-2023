<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Appointment";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check Connection 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $doctors = $_POST['doctor'];
    $patientNames = $_POST['patientName'];
    $appointmentDates = $_POST['appointmentDate'];

    // Submit Data Through Loops 
    for ($i = 0; $i < count($patientNames); $i++) {
        $doctor = $conn->real_escape_string($doctors[$i]);
        $patientName = $conn->real_escape_string($patientNames[$i]);
        $appointmentDate = $conn->real_escape_string($appointmentDates[$i]);

        $sql = "INSERT INTO appointments (doctor, patient_name, appointment_date) VALUES ('$doctor', '$patientName', '$appointmentDate')";

        if ($conn->query($sql) !== true) {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    echo "Data Inserted Successfully.";

    $conn->close();
}
?>