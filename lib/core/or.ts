import type { ArrayWithAtLeast2, ParamArgs } from 'only-utils';

/**
 * Combines multiple functions or boolean values into a single function that returns true if any of the functions return true or any of the boolean values are true.
 *
 * @template T - The type of the combined function.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions or boolean values to be combined.
 * @returns {T} - The combined function.
 */
export const or = <T extends (...args: (ParamArgs<T> | unknown)[]) => boolean>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  ((...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (typeof funcOrBool === 'function') {
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
