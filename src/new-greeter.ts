// should be import type {} but breaks docs
import { Greeter, GreeterDelegate } from './interfaces';

class GreeterImpl implements Greeter {
  constructor(private delegate: GreeterDelegate) {}

  greet(): void {
    this.delegate.say('hello world');
  }
}

/**
 * Creates a new {@link Greeter}.
 *
 * @public
 * @param delegate - a {@link GreeterDelegate} implementation
 */
export default function newGreeter(delegate: GreeterDelegate): Greeter {
  return new GreeterImpl(delegate);
}
