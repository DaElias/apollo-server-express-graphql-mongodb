const Server = require("./models/server");

const server = new Server();
server.listen().catch((e) => console.log(e));
