/**
 * A example library
 * @packageDocumentation
 */

export { default as newGreeter } from './new-greeter.js';

// should be export type but api-documenter
// does not understand export type
export { Greeter, GreeterDelegate } from './interfaces';
