import { CodegenConfig } from "@graphql-codegen/cli";

const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_BASE_URL,
  documents: ["./**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
    },
  },
};

export default config;
