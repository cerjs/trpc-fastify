import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';

import appRouter from './routers/_app';
import { createContext } from './utils/context';

const server = fastify();

server.register(fastifyTRPCPlugin, {
  prefix: '/api/trpc',
  trpcOptions: { router: appRouter, createContext },
});

// fastify router
server.get('/api/json', (req, res) => {
  res.send({
    "result": {
    "data": "Hello fastify"
    }
  });
});

const start = async () => {
  try {
    await server.listen({ port:3001 });
    console.log('listening on port', 3001);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

void start();
