import Twit from 'twit';

class Tweeter {
	private static instance: Tweeter | null = null;

	public static get Instance(): Tweeter {
		if (this.instance === null) {
			this.instance = new Tweeter();
		}
		return this.instance;
	}

	private readonly twit: Twit;

	private constructor() {
		this.twit = new Twit(__config);
	}

	public async tweet(value: string): Promise<void> {
		if (__dev || __test) {
			console.log(value);
			return;
		}
		await this.twit.post('statuses/update', {
			'status': value,
		});
	}
}

export const tweeter = Tweeter.Instance;
