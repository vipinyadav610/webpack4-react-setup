import bodyParser from "body-parser";
import cors from "cors";
import graphqlHTTP from "express-graphql";
import schema from "../graphql/Schema/Schema";
// import { buildSchema } from "graphql";

/**
 * Express instance
 * @param {*} app
 */

export default app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // cross origin
  app.use(cors());

  // graphql middleware
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );
};
