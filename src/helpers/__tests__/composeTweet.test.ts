import {
	composeTweet,
} from '../composeTweet';

describe('helpers/composeTweet', () => {
	const value = 10;

	test('success', () => {
		expect(composeTweet(value)).toBe('1010');
	});
});
