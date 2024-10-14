/**
 * Checks if the provided value is a function.
 *
 * @param value - The value to check.
 * @returns True if the value is a function, otherwise false.
 */
export const isFunction = (value: unknown): value is Function =>
  typeof value === 'function';
