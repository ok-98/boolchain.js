import type { ArrayWithAtLeast2, ParamArgs } from 'only-utils';
import { BoolchainAsyncType, BoolchainType } from '../types';

/**
 * Combines multiple functions or boolean values into a single function that returns true
 * if all functions return true or all boolean values are true.
 *
 * @template T - The type of the functions being combined.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions or boolean values to combine.
 * @returns {T} - A function that returns true if all functions return true or all boolean values are true.
 */
export const and = <T extends BoolchainType<any>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  ((...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (typeof funcOrBool === 'function') {
        if ((funcOrBool as T)(...args) === false) {
          return false;
        }
      } else {
        if (!funcOrBool) {
          return false;
        }
      }
    }
    return true;
  }) as T;

/**
 * Combines multiple asynchronous functions or boolean values into a single asynchronous function.
 * The resulting function returns `true` if all functions return `true` or all boolean values are `true`,
 * otherwise it returns `false`.
 *
 * @template T - The type of the asynchronous functions.
 * @param funcs - An array of asynchronous functions or boolean values.
 * @returns An asynchronous function that combines the provided functions or boolean values.
 */
export const andAsync = <T extends BoolchainAsyncType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  (async (...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (typeof funcOrBool === 'function') {
        if ((await (funcOrBool as T)(...args)) === false) {
          return false;
        }
      } else {
        if (!funcOrBool) {
          return false;
        }
      }
    }
    return true;
  }) as T;
