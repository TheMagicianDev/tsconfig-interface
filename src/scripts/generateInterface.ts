import { getInterfaceFromJsonSchemaUrl } from '../index.js';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rootDir = path.resolve(__dirname, '../..');

console.log(rootDir);

const generatedDir = path.join(rootDir, 'generated-interface');

console.log('Fetching schema and compiling ...');

const { generatedInterface } = await getInterfaceFromJsonSchemaUrl();

fs.writeFileSync(path.join(generatedDir, 'tsconfig.d.ts'), generatedInterface, {
  encoding: 'utf8',
});
