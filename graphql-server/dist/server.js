"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const graphql_tools_1 = require("graphql-tools");
const loadSchema = (schemaFileName) => __awaiter(this, void 0, void 0, function* () {
    const schemaFile = yield fs_extra_1.readFile(schemaFileName, "utf-8");
    // const schema = buildSchema(schemaFile);
    console.log(`Schema ${schemaFileName} loaded`);
    return schemaFile;
});
const graphql_server_koa_1 = require("graphql-server-koa");
const Cors = require("kcors");
const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const PORT = 3000;
const ohaiResolver = () => __awaiter(this, void 0, void 0, function* () {
    return Promise.resolve("world");
});
const userResolver = (root, { name }) => {
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
const Resolvers = {
    Query: {
        hello: ohaiResolver,
        user: userResolver,
    },
};
(() => __awaiter(this, void 0, void 0, function* () {
    const schemaFile = yield loadSchema("./query.gql");
    const executableSchema = graphql_tools_1.makeExecutableSchema({
        resolvers: Resolvers,
        typeDefs: schemaFile,
    });
    const graphql = graphql_server_koa_1.graphqlKoa({
        schema: executableSchema,
    });
    app.use(BodyParser());
    app.use(Cors());
    router.post("/graphql", graphql);
    router.get("/graphql", graphql);
    router.get("/graphiql", graphql_server_koa_1.graphiqlKoa({ endpointURL: "/graphql" }));
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(PORT);
    console.log(`GraphQL server started on port ${PORT}, endpoint /graphql`);
}))();
//# sourceMappingURL=server.js.map