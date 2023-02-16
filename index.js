import express from "express";
import * as dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import colors from "colors";
import connectMongoDB from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

// connect to the database
connectMongoDB();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development"
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
