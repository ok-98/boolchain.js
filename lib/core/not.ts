import type { ParamArgs } from 'only-utils';
import { BoolchainAsyncType, BoolchainType } from '../types';

/**
 * Returns a new function that negates the result of the provided function.
 *
 * @template T - The type of the provided function.
 * @param {T} func - The function to negate.
 * @returns {T} - A new function that negates the result of the provided function.
 */
export const not = <T extends BoolchainType<T>>(func: T | unknown): T =>
  ((...args: ParamArgs<T>[]) => {
    if (typeof func === 'function') {
      return !func(...args);
    }
    return !func;
  }) as T;

/**
 * Wraps an asynchronous function and returns a new function that negates the result of the original function.
 * @template T - The type of the original function.
 * @param {T} func - The original function to be wrapped.
 * @returns {T} - A new function that negates the result of the original function.
 */
export const notAsync = <T extends BoolchainAsyncType<T>>(func: T): T =>
  (async (...args: ParamArgs<T>[]) => !(await func(...args))) as T;
