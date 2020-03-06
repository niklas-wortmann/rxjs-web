module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.CI,
  },
  browser: 'chromium',
  exitOnPageError: false,
};
