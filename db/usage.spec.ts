import { test, expect } from "@playwright/test";
import { Database } from "../dbUtils";

test("Validate database connection and query execution", async () => {
  const db = new Database(
    "your_host",
    "your_username",
    "your_password",
    "your_database"
  );

  // Connect to the database
  await db.connect();

  // Execute a sample query (replace with your actual SQL query)
  const result = await db.query("SELECT * FROM your_table_name LIMIT 1;");

  console.log("Query result:", result);

  // Validate query result
  expect(result.length).toBeGreaterThan(0);

  // Close the database connection
  await db.close();
});
