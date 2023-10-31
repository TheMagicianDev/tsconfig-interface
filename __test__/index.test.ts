import {
  getInterfaceFromJsonSchemaContent,
  getInterfaceFromJsonSchemaUrl,
  tsconfigJsonSchemaDefaultUrl,
} from '../src/index';
import fetch from 'node-fetch';

let defaultSchemaContent: string;
let tsConfigInterfaceFromJsonSchema: string;

const getDefaultSchemaContent = async () => {
  const response = await fetch(tsconfigJsonSchemaDefaultUrl);
  return await response.text();
};

beforeAll(async () => {
  const [dSchemaContentSettled, tsConfigInterfaceSettled] =
    await Promise.allSettled([
      getDefaultSchemaContent(),
      getInterfaceFromJsonSchemaUrl(),
    ]);

  if (dSchemaContentSettled.status === 'fulfilled') {
    defaultSchemaContent = dSchemaContentSettled.value;
  }

  if (tsConfigInterfaceSettled.status === 'fulfilled') {
    tsConfigInterfaceFromJsonSchema = tsConfigInterfaceSettled.value;
  }
});

describe('Fetch and compile default schema', () => {
  test('Default schema fetched correctly', () => {
    console.log(defaultSchemaContent);

    console.log(tsConfigInterfaceFromJsonSchema);

    expect(typeof defaultSchemaContent).toBe('string');
    expect(typeof tsConfigInterfaceFromJsonSchema).toBe('object');
  });
});
