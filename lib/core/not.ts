import type { ParamArgs } from 'only-utils';

/**
 * Returns a new function that negates the result of the provided function.
 *
 * @template T - The type of the provided function.
 * @param {T} func - The function to negate.
 * @returns {T} - A new function that negates the result of the provided function.
 */
export const not = <T extends (...args: ParamArgs<T>[]) => boolean>(
  func: T,
): T => ((...args: ParamArgs<T>[]) => !func(...args)) as T;
