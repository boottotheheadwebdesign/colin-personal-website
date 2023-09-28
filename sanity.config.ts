import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "0yrv31uz",
  dataset: "production",
  title: "Personal Website Colin",
  apiVersion: "2023-09-25",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config;