import { test, expect } from "@playwright/test";

test("Validate Enrollment Completion Message", async ({ page }) => {
  // Navigate to the page
  await page.goto("https://example.com"); // Replace with actual URL

  // Locate the text element
  const textElement = await page
    .locator("selector-of-your-element")
    .textContent();

  if (!textElement) {
    throw new Error("Text not found on the page");
  }

  // Check if the text contains "Enrollment completed on"
  expect(textElement).toContain("Enrollment completed on");

  // Define the regex pattern for "Feb 19, 2025 at 11:42 AM"
  const dateTimeRegex =
    /[A-Z][a-z]{2} \d{1,2}, \d{4} at \d{1,2}:\d{2} [APM]{2}/;

  // Extract the date-time part
  const dateTimePart = textElement
    .replace("Enrollment completed on", "")
    .trim();

  // Validate the date and time format using regex
  expect(dateTimePart).toMatch(dateTimeRegex);
});

/*
[A-Z][a-z]{2}     # Matches a three-letter month (e.g., Feb, Mar, Apr)
\s\d{1,2},        # Matches a day (1-31) followed by a comma
\s\d{4}           # Matches a four-digit year (e.g., 2025)
\sat\s            # Matches the " at " part
\d{1,2}:\d{2}     # Matches the time in HH:MM format
\s[APM]{2}        # Matches AM or PM (uppercase only)
*/