[boolchain](README.md) / Exports

# boolchain

## Table of contents

### Namespaces

- [default](modules/default.md)

### Functions

- [and](modules.md#and)
- [andAsync](modules.md#andasync)
- [nand](modules.md#nand)
- [nandAsync](modules.md#nandasync)
- [not](modules.md#not)
- [notAsync](modules.md#notasync)
- [or](modules.md#or)
- [orAsync](modules.md#orasync)
- [xor](modules.md#xor)
- [xorAsync](modules.md#xorasync)

## Functions

### and

▸ **and**\<`T`\>(`...funcs`): `T`

Combines multiple functions or boolean values into a single function that returns true
if all functions return true or all boolean values are true.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainType`\<`any`\> | The type of the functions being combined. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] | The functions or boolean values to combine. |

#### Returns

`T`

- A function that returns true if all functions return true or all boolean values are true.

#### Defined in

[core/and.ts:13](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/and.ts#L13)

___

### andAsync

▸ **andAsync**\<`T`\>(`...funcs`): `T`

Combines multiple asynchronous functions or boolean values into a single asynchronous function.
The resulting function returns `true` if all functions return `true` or all boolean values are `true`,
otherwise it returns `false`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainAsyncType`\<`T`\> | The type of the asynchronous functions. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] | An array of asynchronous functions or boolean values. |

#### Returns

`T`

An asynchronous function that combines the provided functions or boolean values.

#### Defined in

[core/and.ts:40](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/and.ts#L40)

___

### nand

▸ **nand**\<`T`\>(`...funcs`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `BoolchainType`\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] |

#### Returns

`T`

#### Defined in

[core/nand.ts:6](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/nand.ts#L6)

___

### nandAsync

▸ **nandAsync**\<`T`\>(`...funcs`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `BoolchainAsyncType`\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] |

#### Returns

`T`

#### Defined in

[core/nand.ts:10](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/nand.ts#L10)

___

### not

▸ **not**\<`T`\>(`func`): `T`

Returns a new function that negates the result of the provided function.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainType`\<`T`\> | The type of the provided function. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `unknown` | The function to negate. |

#### Returns

`T`

- A new function that negates the result of the provided function.

#### Defined in

[core/not.ts:12](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/not.ts#L12)

___

### notAsync

▸ **notAsync**\<`T`\>(`func`): `T`

Wraps an asynchronous function and returns a new function that negates the result of the original function.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainAsyncType`\<`T`\> | The type of the original function. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `unknown` | The original function to be wrapped. |

#### Returns

`T`

- A new function that negates the result of the original function.

#### Defined in

[core/not.ts:26](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/not.ts#L26)

___

### or

▸ **or**\<`T`\>(`...funcs`): `T`

Combines multiple functions or boolean values into a single function that returns true if any of the functions return true or any of the boolean values are true.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainType`\<`T`\> | The type of the combined function. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] | The functions or boolean values to be combined. |

#### Returns

`T`

- The combined function.

#### Defined in

[core/or.ts:12](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/or.ts#L12)

___

### orAsync

▸ **orAsync**\<`T`\>(`...funcs`): `T`

Combines multiple asynchronous functions or boolean values into a single function.
The resulting function returns `true` if any of the input functions return `true` or any of the input boolean values are `true`.
Otherwise, it returns `false`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainAsyncType`\<`T`\> | The type of the input functions. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] | The input functions or boolean values. |

#### Returns

`T`

- The combined function.

#### Defined in

[core/or.ts:39](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/or.ts#L39)

___

### xor

▸ **xor**\<`T`\>(`...funcs`): `T`

Performs an exclusive OR (XOR) operation on the provided functions.
Returns a new function that returns true if an odd number of the provided functions return true,
and false otherwise.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainType`\<`T`\> | The type of the functions. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] | The functions to perform the XOR operation on. |

#### Returns

`T`

- A new function that performs the XOR operation.

#### Defined in

[core/xor.ts:16](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/xor.ts#L16)

___

### xorAsync

▸ **xorAsync**\<`T`\>(`...funcs`): `T`

Performs an exclusive OR (XOR) operation on the results of multiple asynchronous functions.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `BoolchainAsyncType`\<`T`\> | The type of the asynchronous function. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | [`unknown`, `unknown`, ...unknown[]] | An array of asynchronous functions. |

#### Returns

`T`

A new asynchronous function that performs the XOR operation on the results of the input functions.

#### Defined in

[core/xor.ts:27](https://github.com/kacper-olszanski/boolchain.js/blob/589b96e5f188871a61b7bdd67ada520b9ad0b081/lib/core/xor.ts#L27)
