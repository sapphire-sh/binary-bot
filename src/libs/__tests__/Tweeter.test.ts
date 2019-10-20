import faker from 'faker';

import {
	composeTweet,
} from '~/helpers';

import {
	Tweeter,
} from '../Tweeter';

describe('libs/Tweeter', () => {
	class TestTweeter extends Tweeter {
		public status: string | null = null;

		public constructor() {
			super({
				consumer_key: 'consumer_key',
				consumer_secret: 'consumer_secret',
				access_token: 'access_token',
				access_token_secret: 'access_token_secret',
			});
		}

		protected async tweet(status: string): Promise<void> {
			this.status = status;
		}
	}

	const value = faker.random.number();

	test('tweetValue', async () => {
		const tweeter = new TestTweeter();

		await tweeter.tweetValue(value);

		const status = composeTweet(value);

		expect(tweeter.status).toBe(status);
	});
});
