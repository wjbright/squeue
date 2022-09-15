import { t } from "../trpc";
import { z } from "zod";

export const squeuesRouter = t.router({
  enqueue: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  fetchQueues: t.procedure.query(({ ctx }) => {
    return ctx.prisma.squeue.findMany();
  }),
});
