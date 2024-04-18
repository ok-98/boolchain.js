import { ArrayWithAtLeast2, ParamArgs } from 'only-utils';
import { and } from './and';
import { not } from './not';
import { or } from './or';

/**
 * Performs an exclusive OR (XOR) operation on the provided functions.
 * Returns a new function that returns true if an odd number of the provided functions return true,
 * and false otherwise.
 *
 * @template T - The type of the functions.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions to perform the XOR operation on.
 * @returns {T} - A new function that performs the XOR operation.
 */
export const xor = <T extends (...args: (ParamArgs<T> | unknown)[]) => boolean>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => and(not(and(...funcs)), or(...funcs)) as T;
