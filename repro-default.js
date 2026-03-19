require("dotenv").config();
const Sentry = require("@sentry/node");

// Default config: no maxValueLength override
Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

// Long message to test truncation
const longMessage =
  "DEFAULT_RUN TRUNCATION_TEST_START " +
  "A".repeat(50000) +
  " TRUNCATION_TEST_END";

// Send test error
Sentry.captureException(new Error(longMessage));

// Make sure the event is sent before exit
Sentry.flush(2000).then(() => {
  console.log("Default event sent");
});
