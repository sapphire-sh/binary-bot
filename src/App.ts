import schedule from 'node-schedule';

import {
	Database,
	Tweeter,
} from '~/libs';

import {
	getNextValue,
} from '~/helpers';

export class App {
	private readonly database: Database;
	private readonly tweeter: Tweeter;

	public constructor() {
		this.database = new Database();
		this.tweeter = new Tweeter(__config);
	}

	private async tweet(): Promise<void> {
		const prevValue = await this.database.readValue();
		const nextValue = getNextValue(prevValue);
		await this.tweeter.tweetValue(nextValue);
		await this.database.writeValue(nextValue);
	}

	public async start() {
		schedule.scheduleJob('0 * * * *', async () => {
			console.log('tweet', new Date());
			await this.tweet();
		});
	}
}
