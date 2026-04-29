import { type SchemaTypeDefinition } from 'sanity'
import { portfolioItem } from './portfolioItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioItem],
}
