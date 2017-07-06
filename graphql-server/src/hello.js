const fs = require('fs-extra');
const { graphql, buildSchema } = require('graphql');

const loadSchema = schema => fs.readFile(schema, 'utf-8');

const root = { hello: () => 'ohai' };

(async () => {
  const schema = buildSchema(await loadSchema('./query.gql'));
  console.log(await graphql(schema, '{ hello }', root));
})();
