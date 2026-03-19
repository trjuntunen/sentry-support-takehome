const Sentry = require("@sentry/node");

// Default config: sample all transactions equally
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});