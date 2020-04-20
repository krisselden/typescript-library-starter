import chai from 'chai';

import { newGreeter } from '../dist/index.js';

const { assert } = chai;

describe('newGreeter', function () {
  it('should create a Greeter', () => {
    let output;

    const greeter = newGreeter({
      say(msg) {
        output = msg;
      },
    });

    greeter.greet();

    assert.equal(output, 'hello world');
  });
});
