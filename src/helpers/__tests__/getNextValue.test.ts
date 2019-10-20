import {
	getNextValue,
} from '../getNextValue';

describe('helpers/getNextValue', () => {
	const value = 10;

	test('success', () => {
		expect(getNextValue(value)).toBe(11);
	});
});
