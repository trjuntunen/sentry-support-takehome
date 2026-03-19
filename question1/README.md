# Question 1 Reproduction

This folder contains a minimal repro for a truncated Sentry error message.

- `repro-default.js` sends a long error message with the default SDK configuration
- `repro-fixed.js` sends the same message with `maxValueLength` increased

## Setup
1. Run `npm install`
2. Add a `.env` file with `SENTRY_DSN=your_dsn_here`

## Run
- `npm run default`
- `npm run fixed`

## Result
In my test, the default run was truncated in Sentry, while the fixed run preserved the full message after increasing `maxValueLength`.