import { getInterfaceFromJsonSchemaUrl } from '../index.js';

const { generatedInterface, schema } = await getInterfaceFromJsonSchemaUrl();

console.log('Schema');
console.log('-------------------------');
console.dir(schema, { depth: null });
console.log();
console.log('Generated interface file:');
console.log('-------------------------');
console.dir(generatedInterface, { depth: null });
