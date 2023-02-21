import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { codeInput } from '@sanity/code-input'

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'Production',
    basePath: '/production',

    projectId: 'fx98y37t',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), codeInput()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'dev-workspace',
    title: 'Development',
    basePath: '/development',

    projectId: 'fx98y37t',
    dataset: 'development',

    plugins: [deskTool(), visionTool(), codeInput()],

    schema: {
      types: schemaTypes,
    },
  },
])
