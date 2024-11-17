import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { ApplicationRouter } from "~/server/api/routers/application";
import { EmployRouter } from "~/server/api/routers/employ";
import { MembershipRouter } from "~/server/api/routers/membership";
import { RegistrationRouter } from "~/server/api/routers/register";


export const appRouter = createTRPCRouter({
  application: ApplicationRouter,
  employ:EmployRouter,
  membership:MembershipRouter,
  register:RegistrationRouter
});


export type AppRouter = typeof appRouter;


export const createCaller = createCallerFactory(appRouter);