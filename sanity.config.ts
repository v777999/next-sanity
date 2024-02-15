import { defineConfig } from 'sanity';
import { structureTool  } from 'sanity/structure';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "3wm0o7px",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-02-14",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas }
})

export default config