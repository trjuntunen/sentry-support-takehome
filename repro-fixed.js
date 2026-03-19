require("dotenv").config();
const Sentry = require("@sentry/node");

// Increased maxValueLength to prevent truncation
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  maxValueLength: 100000,
});

// Same long message for comparison
const longMessage =
  "FIXED_RUN TRUNCATION_TEST_START " +
  "A".repeat(50000) +
  " TRUNCATION_TEST_END";

// Send test error
Sentry.captureException(new Error(longMessage));

// Make sure the event is sent before exit
Sentry.flush(2000).then(() => {
  console.log("Fixed event sent");
});
