import IORedis from 'ioredis';

import IORedisMock from 'ioredis-mock';

export class Database {
	private readonly redis: IORedis.Redis;

	private readonly key = 'binary_bot';

	public get defaultValue(): number {
		return 16498;
	}

	public constructor() {
		this.redis = __test ? new IORedisMock() : new IORedis(process.env.REDIS_HOST);
	}

	public async flush() {
		await this.redis.flushall();
	}

	public async readValue(): Promise<number> {
		const value = await this.redis.get(this.key);
		if(value === null) {
			return this.defaultValue;
		}
		return parseInt(value, 10);
	}

	public async writeValue(value: number): Promise<void> {
		await this.redis.set(this.key, value);
	}
}
