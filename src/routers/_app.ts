import { procedure, router } from '@server/utils/trpc';

export default router({
  /***
   * test
   */
  greeting: procedure
    .query(() => {
      return `Hello  'World`;
    }),
});
