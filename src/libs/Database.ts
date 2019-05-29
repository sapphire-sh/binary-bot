import Redis, {
	Redis as RedisClient,
} from 'ioredis';

import RedisMock from 'ioredis-mock';

class Database {
	private static instance: Database | null = null;

	public static get Instance(): Database {
		if (this.instance === null) {
			this.instance = new Database();
		}
		return this.instance;
	}

	private readonly key = 'binary_bot';

	private readonly redis: RedisClient;

	private constructor() {
		this.redis = __test ? new RedisMock() : new Redis('redis');
	}

	public async readValue(): Promise<number> {
		const entries = await this.redis.zrange(this.key, -1, -1);
		if (entries.length !== 1) {
			throw new Error('invalid entry length');
		}
		const value = `${entries[0]}`.split(':').pop()!;
		return parseInt(value, 10);
	}

	public async writeValue(value: number): Promise<void> {
		const score = Date.now();
		await this.redis.zadd(this.key, `${score}`, `${score}:${value}`);
	}
}

export const database = Database.Instance;
