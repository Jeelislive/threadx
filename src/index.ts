import express, { Express, Request, RequestHandler, Response } from 'express';  
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import createGraphqlServer from './graphql'
import UserService from './services/user';

async function init(){
  const app: Express = express();
  const port = process.env.PORT || 4300;

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });

  const server = await createGraphqlServer();
  app.use('/graphql', json(), expressMiddleware(server, {
    context: async ({ req }) => {
      //@ts-ignore
      const token = req.headers['token'];
      try {
        const user = UserService.decodeJWT(token as string);
        return { user };
      } catch (error) {
        return { user: null };
      }
    }
  }) as any);


  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
}

init();