import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { ApplicationRouter } from "~/server/api/routers/application";
import { EmployRouter } from "~/server/api/routers/employ";
import { MembershipRouter } from "~/server/api/routers/membership";
import { RegistrationRouter } from "~/server/api/routers/register";
import { CostEstimation } from "~/server/api/routers/cost";
import { CarbonRouter } from "~/server/api/routers/carbon";
import { PriceRouter } from "~/server/api/routers/price";
import { CategoryRouter } from "~/server/api/routers/category";
import { GIRouter } from "~/server/api/routers/gi";
import { CraftRouter } from "~/server/api/routers/profiling";

export const appRouter = createTRPCRouter({
  application: ApplicationRouter,
  employ:EmployRouter,
  membership:MembershipRouter,
  register:RegistrationRouter,
  cost:CostEstimation,
  carbon:CarbonRouter,
  price:PriceRouter,
  category:CategoryRouter,
  gi : GIRouter,
  craft:CraftRouter
});


export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);