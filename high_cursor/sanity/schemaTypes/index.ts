
import { type SchemaTypeDefinition } from "sanity";

import { author } from "@/sanity/schemaTypes/author";
import { template } from "@/sanity/schemaTypes/template";
import { playlist } from "@/sanity/schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, template, playlist],
};