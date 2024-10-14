import type { ArrayWithAtLeast2, ParamArgs } from 'only-types';
import { BoolchainAsyncType, BoolchainType } from '../types/index.js';
import { isFunction } from '../util/is-function.js';

/**
 * Combines multiple functions or boolean values into a single function that returns true if any of the functions return true or any of the boolean values are true.
 *
 * @template T - The type of the combined function.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions or boolean values to be combined.
 * @returns {T} - The combined function.
 */
export const or = <T extends BoolchainType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  ((...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (isFunction(funcOrBool)) {
        if ((funcOrBool as T)(...args)) {
          return true;
        }
      } else {
        if (!!funcOrBool) {
          return true;
        }
      }
    }
    return false;
  }) as T;

/**
 * Combines multiple asynchronous functions or boolean values into a single function.
 * The resulting function returns `true` if any of the input functions return `true` or any of the input boolean values are `true`.
 * Otherwise, it returns `false`.
 *
 * @template T - The type of the input functions.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The input functions or boolean values.
 * @returns {T} - The combined function.
 */
export const orAsync = <T extends BoolchainAsyncType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  (async (...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (isFunction(funcOrBool)) {
        if (await (funcOrBool as T)(...args)) {
          return true;
        }
      } else {
        if (!!funcOrBool) {
          return true;
        }
      }
    }
    return false;
  }) as T;
