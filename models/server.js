require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const typeDefs = require("../lib/SchemaGrphql");
const resolvers = require("../lib/resolvers");
const http = require("http");
const { dbConection } = require("../database/configDB");
class Server {
  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.port = 4000 || process.env.PORT;
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });

    this.#connectdb();
  }
  #connectdb() {
    dbConection();
  }
  #middleware() {
    this.server.applyMiddleware({
      app: this.app,
      path: "/api",
    });
  }

  async listen() {
    await this.server.start();
    this.#middleware();
    await new Promise((resolve) =>
      this.httpServer.listen({ port: this.port }, resolve)
    );
    console.log(
      `🚀 Server ready at http://localhost:4000${this.server.graphqlPath}`
    );
  }
}

module.exports = Server;
