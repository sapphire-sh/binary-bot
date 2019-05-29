import {
	database,
} from '~/libs';

class Counter {
	private static instance: Counter | null = null;

	public static get Instance() {
		if (this.instance === null) {
			this.instance = new Counter();
		}
		return this.instance;
	}

	private constructor() { }

	public async resetValue() {
		await database.writeValue(13055);
	}

	public async getNextValue(): Promise<number> {
		const value = await database.readValue();
		return value + 1;
	}

	public async setNextValue(value: number): Promise<void> {
		await database.writeValue(value);
	}
}

export const counter = Counter.Instance;
