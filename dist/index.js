"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
async function init() {
    const app = (0, express_1.default)();
    const PORT = Number(process.env.PORT) || 8000;
    app.use((0, body_parser_1.json)());
    const gqlserver = new server_1.ApolloServer({
        typeDefs: `
      type Query {
        hello: String
      }
    `,
        resolvers: {
            Query: {
                hello: () => 'Hello world!',
            },
        },
    });
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        res.json({ message: "Hello World" });
    });
    await gqlserver.start();
    app.use('/graphql', (0, cors_1.default)(), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(gqlserver));
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
init();
//# sourceMappingURL=index.js.map