import path from 'path';

import schedule from 'node-schedule';

import {
	counter,
	tweeter,
} from '~/libs';

export class App {
	private readonly path: string;

	private job: schedule.Job | null = null;

	constructor() {
		const filename = `number.${__test ? '.test' : ''}.txt`;

		this.path = path.resolve(__dirname, '..', filename);
	}

	public async initialize() {
		try {
			await counter.getNextValue();
		}
		catch (error) {
			await counter.resetValue();
		}
	}

	public async start() {
		console.log('start');

		await this.initialize();

		this.job = schedule.scheduleJob('0 * * * *', async () => {
			const value = await counter.getNextValue();
			await tweeter.tweet(value.toString(2));
			await counter.setNextValue(value);
		});
	}

	public async stop() {
		console.log('stop');

		if (this.job !== null) {
			schedule.cancelJob(this.job);
		}
	}
}
