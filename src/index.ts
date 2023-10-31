import { compile, JSONSchema } from 'json-schema-to-typescript';
import { toSafeString } from 'json-schema-to-typescript/dist/src/utils.js';
import json5 from 'json5';
import fetch from 'node-fetch';

export const tsconfigJsonSchemaDefaultUrl =
  'https://json.schemastore.org/tsconfig';

export { compile };

export async function getSchema(url?: string): Promise<JSONSchema> {
  const response = await fetch(url || tsconfigJsonSchemaDefaultUrl);
  return (await response.json()) as JSONSchema;
}

function getInterfaceNameFromSchemaTitle(title: string): string {
  return toSafeString(title);
}

export function renameMainInterface(
  schemaTitle: string,
  generatedInterface: string,
  newInterfaceName: string = 'ITsconfig',
): string {
  const interfaceName = getInterfaceNameFromSchemaTitle(schemaTitle);
  return generatedInterface.replace(interfaceName, newInterfaceName);
}

export function cleanTopGenerationMessage(
  generatedInterface: string,
  replaceValue: string = '',
): string {
  const topMessageRegex = /^[\S\s]+?(?=export)/g;
  return generatedInterface.replace(topMessageRegex, replaceValue);
}

export async function getInterfaceFromJsonSchemaContent(
  schemaContent: string | JSONSchema,
): Promise<string> {
  if (typeof schemaContent === 'string') {
    schemaContent = json5.parse(schemaContent);
  }
  const generatedInterface = await compile(
    schemaContent as JSONSchema,
    'ITsconfig ',
  );
  return cleanTopGenerationMessage(
    renameMainInterface(
      (schemaContent as JSONSchema).title!,
      generatedInterface,
    ),
    '/*\n' +
      ' * This file is generated regularly from the official json schema\n' +
      ' * MIT license\n' +
      ' */\n',
  );
}

interface IGetInterfaceFromSchemaUrlResult {
  generatedInterface: string;
  schema: JSONSchema;
}

export async function getInterfaceFromJsonSchemaUrl(
  url?: string,
): Promise<IGetInterfaceFromSchemaUrlResult> {
  try {
    const schema = await getSchema(url);

    if (schema) {
      return {
        generatedInterface: await getInterfaceFromJsonSchemaContent(schema),
        schema,
      };
    }

    throw new Error('Fetched content not valid!');
  } catch (err) {
    // Some error handling here (Clear help guidance)
    throw err;
  }
}
