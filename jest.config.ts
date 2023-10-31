import type { InitialOptionsTsJest } from 'ts-jest';
import { jsWithBabel as tsjPreset } from 'ts-jest/presets';
import path from 'path';

const config: InitialOptionsTsJest = {
  testEnvironment: 'node',
  transformIgnorePatterns: [
    `node_modules/(?!(node-fetch|data-uri-to-buffer)/)`,
  ],
  // globals: {
  //   'ts-jest': {
  //     babelConfig: {
  //       presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  //       include: ['src', path.dirname(require.resolve('node-fetch'))],
  //     },
  //   },
  // },
};

export default config;
