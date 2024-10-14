import { OptionalValue } from '@ok98/optional';
import type { NotPromise, ParamArgs, TOrUndefined } from '@only/types';

/**
 * Represents a type for a function that takes parameters of type `ParamArgs<T>` or `unknown`
 * and returns a boolean value.
 *
 * @template T - A function type that takes parameters of type `ParamArgs<T>` or `unknown`
 *               and returns a non-promise boolean value.
 */
export type BoolchainType<
  T extends (...args: (ParamArgs<T> | unknown)[]) => NotPromise<boolean>,
> = (...args: (ParamArgs<T> | unknown)[]) => boolean;

/**
 * A type alias for an asynchronous function that takes parameters of type `ParamArgs<T>` or `unknown`
 * and returns a `Promise<boolean>`.
 *
 * @template T - A function type that takes parameters of type `ParamArgs<T>` or `unknown` and returns a `Promise<boolean>`.
 */
export type BoolchainAsyncType<
  T extends (...args: (ParamArgs<T> | unknown)[]) => Promise<boolean>,
> = (...args: (ParamArgs<T> | unknown)[]) => Promise<boolean>;

/**
 * Represents a value that can be either a boolean or a function that returns a boolean.
 */
export type ChainOfBoolInputValue = boolean | (() => boolean);

/**
 * Represents a chain of boolean values with various operations.
 */
export type ChainOfBool = {
  /**
   * Performs a logical AND operation with the specified value.
   * @param value - The value to perform the AND operation with.
   * @returns A new ChainOfBool instance.
   */
  and: (value: ChainOfBoolInputValue) => ChainOfBool;

  /**
   * Performs a logical OR operation with the specified value.
   * @param value - The value to perform the OR operation with.
   * @returns A new ChainOfBool instance.
   */
  or: (value: ChainOfBoolInputValue) => ChainOfBool;

  /**
   * Gets the final boolean value of the chain.
   * @returns The boolean value.
   */
  get: () => boolean;

  /**
   * Gets the final boolean value of the chain as an optional value.
   * @returns The optional boolean value.
   */
  getOptional: () => OptionalValue<boolean>;

  /**
   * Filters the boolean value of the chain using the specified predicate.
   * @param predicate - The predicate function to filter the value.
   * @returns The filtered boolean value as an optional value.
   */
  filter: (predicate: (value: boolean) => boolean) => OptionalValue<boolean>;

  /**
   * Maps the boolean value of the chain to a new value using the specified mapper function.
   * @param mapper - The mapper function to transform the value.
   * @returns The transformed value or undefined.
   */
  map: <T>(mapper: (value: boolean) => T) => TOrUndefined<T>;
};
