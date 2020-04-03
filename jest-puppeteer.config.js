module.exports = {
	launch: {
		dumpio: true,
		headless: true,
		args: ['--disable-gpu', '--no-sandbox'],
	},
	browser: 'chromium',
	exitOnPageError: false,
};
