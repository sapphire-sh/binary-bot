import fs from 'fs';
import assert from 'assert';

import App from '../src/app';

describe('@binary_bot', () => {
	const app = new App();

	it('should return 0', (done) => {
		app.readNumber()
		.then((e) => {
			assert.equal(e, 0);

			done();
		});
	});

	it('should write 2', (done) => {
		app.writeNumber(2)
		.then(() => {
			return app.readNumber();
		})
		.then((e) => {
			assert.equal(e, 2);

			done();
		})
		.catch((err) => {
			assert.fail(err);

			done();
		});
	});

	after(() => {
		fs.unlinkSync(app.path);
	});
});
