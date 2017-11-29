import schedule from 'node-schedule';

import App from './app';

const app = new App();

const s = schedule.scheduleJob('* * * * *', () => {
	app.readNumber()
	.then((e) => {
		let number = e;

		return app.tweet(number);
	})
	.then((e) => {
		return app.writeNumber(e + 1);
	})
	.catch((err) => {
		console.log(err);
	});
});
