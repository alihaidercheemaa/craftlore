import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { ApplicationRouter } from "~/server/api/routers/application";
import { EmployRouter } from "~/server/api/routers/employ";


export const appRouter = createTRPCRouter({
  application: ApplicationRouter,
  employ:EmployRouter
});


export type AppRouter = typeof appRouter;


export const createCaller = createCallerFactory(appRouter);