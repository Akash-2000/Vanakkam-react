const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Replace with actual token and values
const TOKEN = "ReplaceWithToken";
const AIRID = "4N";
const COMMAND = "RO/4N509/01OCT";

// API endpoint
const url = "https://api.paxiq.com/vapi/soap/command";

// Function to send POST request
async function sendQuery() {
  try {
    const response = await axios.post(
      url,
      {
        airlineId: AIRID,
        command: COMMAND,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Token: TOKEN,
        },
      },
    );

    const timestamp = new Date().toISOString();
    const logEntry = `Timestamp: ${timestamp}\nResponse: ${JSON.stringify(response.data, null, 2)}\n\n`;

    // Log response and timestamp to a file
    fs.appendFile(path.join(__dirname, "response_log.txt"), logEntry, (err) => {
      if (err) {
        console.error("Failed to log response:", err);
      } else {
        console.log("Response logged successfully.");
      }
    });
  } catch (error) {
    console.error("Error making the request:", error);
  }
}

// Invoke the function
sendQuery();
