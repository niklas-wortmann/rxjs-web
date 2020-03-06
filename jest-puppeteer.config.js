module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.CI,
    args: ['--disable-gpu']
  },
  browser: 'chromium',
  exitOnPageError: false,
};
