import { ArrayWithAtLeast2 } from 'only-types';
import { BoolchainAsyncType, BoolchainType } from '../types/index.js';
import { and, andAsync } from './and.js';
import { not, notAsync } from './not.js';
import { or, orAsync } from './or.js';

/**
 * Performs an exclusive OR (XOR) operation on the provided functions.
 * Returns a new function that returns true if an odd number of the provided functions return true,
 * and false otherwise.
 *
 * @template T - The type of the functions.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions to perform the XOR operation on.
 * @returns {T} - A new function that performs the XOR operation.
 */
export const xor = <T extends BoolchainType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => and(not(and(...funcs)), or(...funcs)) as T;

/**
 * Performs an exclusive OR (XOR) operation on the results of multiple asynchronous functions.
 *
 * @template T - The type of the asynchronous function.
 * @param funcs - An array of asynchronous functions.
 * @returns A new asynchronous function that performs the XOR operation on the results of the input functions.
 */
export const xorAsync = <T extends BoolchainAsyncType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => andAsync(notAsync(andAsync(...funcs)), orAsync(...funcs)) as T;
