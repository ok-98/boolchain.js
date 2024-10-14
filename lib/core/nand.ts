import type { ArrayWithAtLeast2 } from '@only/types';
import { BoolchainAsyncType, BoolchainType } from '../types/index.js';
import { and, andAsync } from './and.js';
import { not, notAsync } from './not.js';

/**
 * Applies the NAND (Not AND) operation to the provided functions.
 *
 * @template T - A type that extends `BoolchainType<T>`.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - An array of at least two functions or values of type `T` or unknown.
 * @returns {T} - The result of the NAND operation, cast to type `T`.
 */
export const nand = <T extends BoolchainType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => not(and(...funcs)) as T;

/**
 * Asynchronously performs a NAND operation on the provided functions.
 *
 * @template T - A type that extends `BoolchainAsyncType<T>`.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - An array containing at least two functions or unknown values.
 * @returns {T} - The result of the NAND operation, cast to type `T`.
 */
export const nandAsync = <T extends BoolchainAsyncType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => notAsync(andAsync(...funcs)) as T;
