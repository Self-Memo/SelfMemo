<?php

require_once '../db/reminders.php';

header("Content-Type: application/json");

function checkAndSendEmailReminders()
{
    $currentDate = date('Y-m-d H:i:s');
    $reminders = Reminders::getAllReminders();

    foreach ($reminders as $reminder) {
        $expirationDate = $reminder['expiration_date'];

        // Check if the reminder has expired
        if ($expirationDate <= $currentDate) {
            // Placeholder: Send email
            sendEmailReminder($reminder);
        }
    }
}

// API endpoint for checking and sending email reminders
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['action']) && $_GET['action'] === 'check_and_send_email') {
        checkAndSendEmailReminders();
        echo json_encode(['message' => 'Email reminders checked and sent']);
    } else {
        echo json_encode(['error' => 'Invalid action']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}

