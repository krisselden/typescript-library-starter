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
  say(msg: string): void;
}
