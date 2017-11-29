import fs from 'fs';
import path from 'path';

import Promise from 'bluebird';

import Twit from 'twit';

import CONFIG from '../config';

Promise.promisifyAll(fs);

class App {
	constructor() {
		let self = this;

		const filename = 'number' + (process.env.NODE_ENV === 'test' ? '.test' : '') + '.txt';
		self.path = path.resolve(__dirname, '../dist', filename);

		let twit = new Twit(CONFIG);
		Promise.promisifyAll(twit);
		self.twit = twit;
	}

	readNumber() {
		let self = this;

		return fs.readFileAsync(self.path)
		.then((e) => {
			const number = parseInt(e);
			return isNaN(number) ? 0 : number;
		})
		.catch((err) => {
			switch(err.code) {
			case 'ENOENT':
				return fs.writeFileAsync(self.path, 0)
				.then(() => {
					return 0;
				})
				.catch((err) => {
					console.log(err);
				});
			default:
				return 0;
			}
		});
	}

	writeNumber(number) {
		let self = this;

		return fs.writeFileAsync(self.path, number)
		.then((e) => {
			return true;
		});
	}

	tweet(number) {
		let self = this;

		return self.twit.postAsync('statuses/update', {
			'status': number.toString(2),
		})
		.then((res) => {
			return Promise.resolve(number);
		});
	}
}

export default App;
