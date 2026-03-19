require("dotenv").config();
const Sentry = require("@sentry/node");

// Lower sampling for /about
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampler: ({ name, inheritOrSampleWith }) => {
    // Sample /about at a lower rate than the rest of the app
    if (name.includes("/about")) {
      return 0.01;
    }

    return inheritOrSampleWith(1.0);
  },
});