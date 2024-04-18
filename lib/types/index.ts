import { ParamArgs } from 'only-utils';

export type BoolchainType<
  T extends (...args: (ParamArgs<T> | unknown)[]) => boolean,
> = (...args: (ParamArgs<T> | unknown)[]) => boolean;

export type BoolchainAsyncType<
  T extends (...args: (ParamArgs<T> | unknown)[]) => Promise<boolean>,
> = (...args: (ParamArgs<T> | unknown)[]) => Promise<boolean>;
