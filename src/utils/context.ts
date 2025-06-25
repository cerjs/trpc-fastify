import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async (opts: CreateFastifyContextOptions) => {
  const { req, res } = opts;
  return {
    req,
    res,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
