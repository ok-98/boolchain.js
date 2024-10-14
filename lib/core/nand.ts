import type { ArrayWithAtLeast2 } from '@only/types';
import { BoolchainAsyncType, BoolchainType } from '../types/index.js';
import { and, andAsync } from './and.js';
import { not, notAsync } from './not.js';

export const nand = <T extends BoolchainType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => not(and(...funcs)) as T;

export const nandAsync = <T extends BoolchainAsyncType<T>>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => notAsync(andAsync(...funcs)) as T;
