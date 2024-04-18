import type { ArrayWithAtLeast2 } from 'only-utils';
import { BoolchainAsyncType, BoolchainType } from '../types';
import { and, andAsync } from './and';
import { not, notAsync } from './not';

export const nand = <T extends BoolchainType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => not(and(...funcs)) as T;

export const nandAsync = <T extends BoolchainAsyncType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => notAsync(andAsync(...funcs)) as T;
