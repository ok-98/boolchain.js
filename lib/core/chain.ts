import { Optional, OptionalValue } from 'better-optional';
import { isBoolean, transformIfDefined } from 'only-utils';
import type { SimpleFunction } from '@only/types';
import { ChainOfBool, ChainOfBoolInputValue } from '../types/index.ts';
import { isFunction } from '../util/is-function.ts';
import { or } from './or.ts';
import { booleanOrFunctionToBoolean } from './utils.ts';

type _InputValue = ChainOfBoolInputValue | OptionalValue<boolean>;

const inputValueToOptional = (value?: _InputValue): OptionalValue<boolean> =>
  transformIfDefined(value, (v) =>
    or(isBoolean, isFunction)(v)
      ? Optional.of(booleanOrFunctionToBoolean(v as ChainOfBoolInputValue))
      : (value as unknown as OptionalValue<boolean>),
  ) ?? (Optional.empty() as OptionalValue<boolean>);

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
