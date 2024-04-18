[boolchain](README.md) / Exports

# boolchain

## Table of contents

### Functions

- [not](modules.md#not)

## Functions

### not

▸ **not**\<`T`\>(`func`): `T`

Returns a new function that negates the result of the provided function.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends (...`args`: `ParamArgs`\<`T`\>[]) => `boolean` | The type of the provided function. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to negate. |

#### Returns

`T`

- A new function that negates the result of the provided function.

#### Defined in

[core/not.ts:10](https://github.com/kacper-olszanski/boolchain.js/blob/85ae87fa246196af11bc024741d0a04ef4141f16/lib/core/not.ts#L10)
