import { readFile } from "fs-extra";
import { buildSchema, graphql } from "graphql";
import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";

const loadSchema = async (schemaFileName: string) => {
  const schemaFile = await readFile(schemaFileName, "utf-8");
  // const schema = buildSchema(schemaFile);
  console.log(`Schema ${schemaFileName} loaded`);
  return schemaFile;
};

import { graphiqlKoa, graphqlKoa } from "graphql-server-koa";
import * as Cors from "kcors";
import * as Koa from "koa";
import * as BodyParser from "koa-bodyparser";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();
const PORT = 3000;

const ohaiResolver = async (): Promise<string> => {
  return Promise.resolve("world");
};

const userResolver = (root: any, { name }: { name: string} ) => {
  if (name === "dagon") {
    return {
      id: "1338",
      name: "dagon",
    };
  }

  return {
    id: "1337",
    name: "leet",
  };
};

const Resolvers: any = {
  Query: {
    hello: ohaiResolver,
    user: userResolver,
  },
};

(async () => {
  const schemaFile = await loadSchema("./query.gql");
  const executableSchema = makeExecutableSchema({
    resolvers: Resolvers,
    typeDefs: schemaFile,
  });

  const graphql = graphqlKoa({
    schema: executableSchema,
  });

  app.use(BodyParser());
  app.use(Cors());

  router.post("/graphql", graphql);
  router.get("/graphql", graphql);

  router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

  app.use(router.routes());
  app.use(router.allowedMethods());
  app.listen(PORT);

  console.log(`GraphQL server started on port ${PORT}, endpoint /graphql`);
})();
