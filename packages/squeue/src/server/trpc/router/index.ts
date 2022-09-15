// src/server/router/index.ts
import { t } from "../trpc";

import { squeuesRouter } from "./squeues";

export const appRouter = t.router({
  squeues: squeuesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
