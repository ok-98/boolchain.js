import type { ArrayWithAtLeast2, ParamArgs } from 'only-utils';

/**
 * Combines multiple functions or boolean values into a single function that returns true
 * if all functions return true or all boolean values are true.
 *
 * @template T - The type of the functions being combined.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions or boolean values to combine.
 * @returns {T} - A function that returns true if all functions return true or all boolean values are true.
 */
export const and = <T extends (...args: (ParamArgs<T> | unknown)[]) => boolean>(
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
