# Question 2 Reproduction

This folder contains a minimal repro for route-based sampling with `tracesSampler`.

- `instrument-default.js` initializes Sentry with a uniform tracing sample rate
- `instrument-fixed.js` initializes Sentry with a lower sample rate for `/about`
- `repro-default.js` starts the default Express server
- `repro-fixed.js` starts the fixed Express server
- `generate-traffic.js` sends repeated requests to `/about`

## Setup
1. Run `npm install`
2. Add a `.env` file with `SENTRY_DSN=your_dsn_here`

## Run
1. Start the default server:
   `npm run default`
2. In a second terminal, generate traffic:
   `npm run traffic`
3. Stop the default server
4. Start the fixed server:
   `npm run fixed`
5. In a second terminal, generate traffic again:
   `npm run traffic`

## Result
In my test, the default run produced many sampled `GET /about` transactions, while the fixed run produced noticeably fewer after lowering the sample rate for `/about` with `tracesSampler`.