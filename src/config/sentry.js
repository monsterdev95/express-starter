const { NODE_ENV, SENTRY_DSN } = process.env;

export default {
  dsn: SENTRY_DSN,
  environment: NODE_ENV,
};
