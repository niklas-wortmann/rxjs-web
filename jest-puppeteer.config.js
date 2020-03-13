module.exports = {
  launch: {
    dumpio: true,
    headless: typeof process.env.CI !== 'undefined',
    args: ['--disable-gpu']
  },
  browser: 'chromium',
  exitOnPageError: false
};
