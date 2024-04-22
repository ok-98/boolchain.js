import { isFunction } from '../util/is-function.ts';

/**
 * Converts a boolean value or a function that returns a boolean to a boolean value.
 * If the input value is a function, it will be called and its return value will be used.
 * If the input value is already a boolean, it will be returned as is.
 *
 * @param value - The boolean value or function to convert.
 * @returns The converted boolean value.
 */
export const booleanOrFunctionToBoolean = (
  value: boolean | (() => boolean),
): boolean => (isFunction(value) ? value() : value);
