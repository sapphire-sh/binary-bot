import Twit from 'twit';

import {
	composeTweet,
} from '~/helpers';

export class Tweeter {
	private readonly twit: Twit;

	public constructor(config: Twit.ConfigKeys) {
		this.twit = new Twit(config);
	}

	protected async tweet(status: string): Promise<void> {
		await this.twit.post('statuses/update', { status });
	}

	public async tweetValue(value: number): Promise<void> {
		try {
			const status = composeTweet(value);
			await this.tweet(status);
		}
		catch (error) {
			console.log(error);
		}
	}
}
