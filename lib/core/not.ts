import type {ParamArgs} from "only-utils"

export const not = <T extends (...args: ParamArgs<T>[]) => boolean>(
    func: T,
  ): T => ((...args: ParamArgs<T>[]) => !func(...args)) as T;
  