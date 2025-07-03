import { procedure, router } from '@server/utils/trpc';
import { z } from 'zod/v4';
export default router({
  /***
   * test
   */
  greeting: procedure
    .input(z.object({
      json:z.object({
        title: z.string().optional(),
        body: z.string().optional(),
      }).optional()
    }).optional)
    .query(() => {
      return "Hello trpc-fastify";
    }),
  hello: procedure
    .query(() => {
      return "Hello trpc-fastify";
    }),
});
