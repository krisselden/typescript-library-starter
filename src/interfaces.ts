/**
 * Supports greeting
 * @public
 */
export interface Greeter {
  /**
   * Perform the greeting
   */
  greet(): void;
}

/**
 * A delegate for greeting
 * @public
 */
export interface GreeterDelegate {
  /**
   * Say the specified message
   * @param msg - a message to say
   */
  say(msg: string): void;
}
