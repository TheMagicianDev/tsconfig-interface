# tsconfig-interface

Package providing the tsconfig.json interface type. That is automatically generated from the [official json schema](http://json.schemastore.org/tsconfig) in the schema store. As listed in the [typescript official documentation (tsconfig)](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

The interface is updated regularly. Whenever the schema change.

If you want to manage that process yourself through your own crone job. You can use the generator module i built `tsconfig-interface-generator`. You can check it [here](). It does export good tooling. You can use `getInterfaceFromJsonSchemaUrl()` method to simply generate the interface from the official schema from the official source.

Npmjs: ...

## Installation

```sh
npm install tsconfig-interface
```
```sh
pnpm add tsconfig-interface
```

```sh
yarn add tsconfig-interface
```

## Usage

```ts
import { ITsconfig } from 'tsconfig-interface';

type TCompilerOptions = ITsconfig['compilerOptions'];
type TModuleType = ITsconfig['compilerOptions']['module'];
```
