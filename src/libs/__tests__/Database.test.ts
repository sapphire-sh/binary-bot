import assert from 'assert';

import {
	database,
} from '../Database';

describe('database lib', () => {
	it('should write value', async () => {
		const prevValue = 10;
		await database.writeValue(prevValue);
		const nextValue = await database.readValue();
		assert.equal(prevValue, nextValue);
	});
});
