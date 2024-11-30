
import { type SchemaTypeDefinition } from "sanity";

import { author } from "@/sanity/schemaTypes/author";
import { template } from "@/sanity/schemaTypes/template";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, template],
};