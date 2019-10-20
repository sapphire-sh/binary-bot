import faker from 'faker';

import {
	Database,
} from '../Database';

describe('libs/Database', () => {
	const prevValue = faker.random.number();

	const database = new Database();

	beforeEach(async () => {
		await database.flush();
		await database.writeValue(prevValue);
	});

	describe('readValue', () => {
		test('success', async () => {
			const value = await database.readValue();
			expect(value).toBe(prevValue);
		});

		test('success - default value', async () => {
			await database.flush();
			const value = await database.readValue();
			expect(value).toBe(database.defaultValue);
		});
	});

	describe('writeValue', () => {
		test('success', async () => {
			const prevValue = await database.readValue();

			const nextValue = faker.random.number();
			await database.writeValue(nextValue);

			const currValue = await database.readValue();
			expect(currValue).not.toBe(prevValue);
			expect(currValue).toBe(nextValue);
		});
	});
});
