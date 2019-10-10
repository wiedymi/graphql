export const setRateLimiter = (mongoConn, opts = {}) => ({
  storeClient: mongoConn,
  points: 100, // Number of points
  duration: 1,
  ...opts,
})
