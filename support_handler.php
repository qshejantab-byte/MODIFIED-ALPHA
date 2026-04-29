<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

$customer_name = trim(strip_tags(htmlspecialchars($_POST['customer_name'] ?? '', ENT_QUOTES, 'UTF-8')));
$email         = trim(strip_tags(htmlspecialchars($_POST['email']         ?? '', ENT_QUOTES, 'UTF-8')));
$subject       = trim(strip_tags(htmlspecialchars($_POST['subject']       ?? '', ENT_QUOTES, 'UTF-8')));
$description   = trim(strip_tags(htmlspecialchars($_POST['description']   ?? '', ENT_QUOTES, 'UTF-8')));

if (!$customer_name || !$email || !$subject || !$description) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

$stmt = $conn->prepare("INSERT INTO support_messages (customer_name, email, subject, description) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $customer_name, $email, $subject, $description);

if ($stmt->execute()) {
    // Send email notification to Alpha Computer LTD
    $to      = 'info@alphacomputer.rw';
    $mail_subject = 'New Website Inquiry: ' . $subject;
    $mail_body  = "You have received a new inquiry from your website.\n\n"
                . "-------------------------------------------\n"
                . "Name:        " . $customer_name . "\n"
                . "Email:       " . $email . "\n"
                . "Subject:     " . $subject . "\n"
                . "-------------------------------------------\n"
                . "Message:\n" . $description . "\n"
                . "-------------------------------------------\n"
                . "Sent via alphacomputer.rw contact form";

    $headers  = "From: noreply@alphacomputer.rw\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail($to, $mail_subject, $mail_body, $headers);

    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Could not send your message. Please try again.']);
}

$stmt->close();
$conn->close();