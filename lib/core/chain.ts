import { Optional, OptionalValue } from 'better-optional';
import { isBoolean, transformIfDefined } from 'only-utils';
import type { SimpleFunction } from 'only-types';
import { ChainOfBool, ChainOfBoolInputValue } from '../types/index.ts';
import { isFunction } from '../util/is-function.ts';
import { or } from './or.ts';
import { booleanOrFunctionToBoolean } from './utils.ts';

/**
 * Represents a type that can either be a `ChainOfBoolInputValue` or an `OptionalValue<boolean>`.
 * This type is used to handle input values that are part of a boolean chain.
 */
type _InputValue = ChainOfBoolInputValue | OptionalValue<boolean>;

/**
 * Converts an optional input value to an optional boolean value.
 *
 * @param value - The input value which can be of type `_InputValue`.
 * @returns An `OptionalValue<boolean>` which is either the transformed boolean value
 *          or an empty optional if the input value is undefined.
 */
const inputValueToOptional = (value?: _InputValue): OptionalValue<boolean> =>
  transformIfDefined<_InputValue, boolean>(value, (v: _InputValue) =>
    or(isBoolean, isFunction)(v)
      ? Optional.of(booleanOrFunctionToBoolean(v as ChainOfBoolInputValue))
      : (value as unknown as OptionalValue<boolean>),
  ) ?? (Optional.empty() as OptionalValue<boolean>);

/**
 * Creates a chainable boolean value with logical operations.
 *
 * @param value - The initial value to start the chain. It can be a boolean or a function returning a boolean.
 * @returns An object representing the chainable boolean value with methods for logical operations.
 *
 * @method and - Performs a logical AND operation with the next value and returns a new chain.
 * @param nextValue - The value to perform the AND operation with. It can be a boolean or a function returning a boolean.
 * @returns A new chain with the result of the AND operation.
 *
 * @method or - Performs a logical OR operation with the next value and returns a new chain.
 * @param nextValue - The value to perform the OR operation with. It can be a boolean or a function returning a boolean.
 * @returns A new chain with the result of the OR operation.
 *
 * @method get - Retrieves the current boolean value of the chain.
 * @returns The current boolean value.
 *
 * @method getOptional - Retrieves the current value of the chain wrapped in an OptionalValue.
 * @returns The current value wrapped in an OptionalValue.
 *
 * @method filter - Filters the current value based on a predicate function.
 * @param predicate - A function that takes the current boolean value and returns a boolean.
 * @returns The filtered value wrapped in an OptionalValue.
 *
 * @method map - Maps the current boolean value to another value using a mapper function.
 * @param mapper - A function that takes the current boolean value and returns a new value.
 * @returns The mapped value.
 */
const _chain = (value?: _InputValue): ChainOfBool => {
  let currentState: OptionalValue<boolean> = inputValueToOptional(value);

  return {
    and: (nextValue: ChainOfBoolInputValue) => {
      if (!currentState.isPresent()) {
        currentState = inputValueToOptional(true);
      }

      return _chain(
        currentState.map((v) => v && booleanOrFunctionToBoolean(nextValue)),
      );
    },
    or: (nextValue: ChainOfBoolInputValue) => {
      if (!currentState.isPresent()) {
        currentState = inputValueToOptional(false);
      }

      return _chain(
        currentState.map((v) => v || booleanOrFunctionToBoolean(nextValue)),
      );
    },
    get: () => currentState.orElse(false),
    getOptional: () => currentState,
    filter: (predicate: SimpleFunction<boolean, boolean>) =>
      currentState.filter(predicate),
    map: <T>(mapper: SimpleFunction<boolean, T>) =>
      currentState.map(mapper).get(),
  };
};

/**
 * Creates a chain object that allows chaining boolean operations.
 *
 * @param value - The initial value for the chain.
 * @returns A chain object with methods for performing boolean operations.
 */
export const chain = (value?: ChainOfBoolInputValue): ChainOfBool =>
  _chain(value);
