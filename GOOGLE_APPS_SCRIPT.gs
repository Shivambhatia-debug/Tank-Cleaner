// Google Apps Script for Tank Cleaner Contact Form
// Deploy as Web App: New deployment → Type: Web App → Execute as: Me → Allow: Anyone

const SHEET_NAME = "Contact Submissions";
const EMAIL_RECIPIENT = "kccdbg@gmail.com";

// Initialize sheet with headers if it doesn't exist
function initializeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("Spreadsheet ID: " + ss.getId());
  Logger.log("Spreadsheet Name: " + ss.getName());
  
  let sheet = ss.getSheetByName(SHEET_NAME);
  Logger.log("Looking for sheet: " + SHEET_NAME);
  
  if (!sheet) {
    Logger.log("Sheet not found, getting first sheet...");
    const sheets = ss.getSheets();
    Logger.log("Total sheets: " + sheets.length);
    
    if (sheets.length > 0) {
      sheet = sheets[0];
      Logger.log("Using first sheet: " + sheet.getName());
      sheet.setName(SHEET_NAME);
      Logger.log("Renamed to: " + SHEET_NAME);
    } else {
      Logger.log("No sheets found, creating new one...");
      sheet = ss.insertSheet(SHEET_NAME);
    }
  } else {
    Logger.log("Sheet found: " + SHEET_NAME);
  }
  
  if (sheet.getLastRow() === 0) {
    Logger.log("Sheet is empty, adding headers...");
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Email",
      "Service Type",
      "Message"
    ]);
    Logger.log("Headers added");
  } else {
    Logger.log("Sheet already has data, last row: " + sheet.getLastRow());
  }
  
  return sheet;
}

// Main handler for POST requests
function doPost(e) {
  Logger.log("=== doPost called ===");
  Logger.log("Request received");
  
  try {
    const sheet = initializeSheet();
    Logger.log("Sheet initialized successfully");
    
    // Parse request data
    const dataString = e.postData.contents;
    Logger.log("Raw data received: " + dataString);
    
    const data = JSON.parse(dataString);
    Logger.log("Parsed data: " + JSON.stringify(data));
    
    // Validate required fields
    if (!data.name || !data.phone) {
      Logger.log("Validation failed - missing name or phone");
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          message: "Name and Phone are required"
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add data to sheet
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata"
    });
    
    Logger.log("Adding row with timestamp: " + timestamp);
    sheet.appendRow([
      timestamp,
      data.name,
      data.phone,
      data.email || "Not provided",
      data.service || "Not specified",
      data.message || ""
    ]);
    
    Logger.log("Row added successfully at row: " + sheet.getLastRow());
    
    // Send email notification
    sendEmailNotification(data, timestamp);
    
    Logger.log("Sending success response");
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
        sheetId: SpreadsheetApp.getActiveSpreadsheet().getId(),
        timestamp: timestamp
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("ERROR in doPost: " + error.toString());
    Logger.log("Stack: " + error.stack);
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error: " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Send email notification
function sendEmailNotification(data, timestamp) {
  try {
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <table border="1" cellpadding="10" style="border-collapse: collapse; margin-top: 10px;">
        <tr>
          <td><strong>Timestamp:</strong></td>
          <td>${timestamp}</td>
        </tr>
        <tr>
          <td><strong>Name:</strong></td>
          <td>${data.name}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>${data.phone}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${data.email || "Not provided"}</td>
        </tr>
        <tr>
          <td><strong>Service Type:</strong></td>
          <td>${data.service || "Not specified"}</td>
        </tr>
        <tr>
          <td><strong>Message:</strong></td>
          <td>${data.message || ""}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #666;">
        <em>This is an automated email. Please do not reply.</em>
      </p>
    `;
    
    GmailApp.sendEmail(
      EMAIL_RECIPIENT,
      `New Contact Form Submission - ${data.service || "Inquiry"}`,
      "",
      {
        htmlBody: emailBody
      }
    );
    
    Logger.log("Email sent to: " + EMAIL_RECIPIENT);
  } catch (error) {
    Logger.log("Email error: " + error);
  }
}

// Test function (run this to test)
function test() {
  Logger.log("=== TEST FUNCTION STARTED ===");
  
  const testData = {
    name: "Test User 123",
    phone: "9031117300",
    email: "test@example.com",
    service: "Water Tank Cleaning",
    message: "This is a test message from Apps Script"
  };
  
  Logger.log("Test data: " + JSON.stringify(testData));
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  const responseContent = result.getContent();
  Logger.log("Response: " + responseContent);
  Logger.log("=== TEST FUNCTION ENDED ===");
}

// Debug function to check sheet
function debugSheet() {
  Logger.log("=== DEBUG SHEET ===");
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("Spreadsheet: " + ss.getName());
  Logger.log("ID: " + ss.getId());
  
  const sheets = ss.getSheets();
  Logger.log("Total sheets: " + sheets.length);
  
  sheets.forEach((s, i) => {
    Logger.log("Sheet " + i + ": " + s.getName() + " (Rows: " + s.getLastRow() + ")");
  });
}

// Get deployment URL for reference
function getDeploymentUrl() {
  const url = ScriptApp.getService().getUrl();
  Logger.log("Deployment URL: " + url);
}
