import { createTRPCRouter } from "./trpc"

import { userResource } from "./routers/userResource"
import { toolsResource } from "./routers/toolsResource"
import { logosResource } from "./routers/logosResource"
import { carouselResource } from "./routers/carouselResource"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter( {
  user: userResource,
  tools: toolsResource,
  carousel: carouselResource,
  logos: logosResource
} )

// export type definition of API
export type AppRouter = typeof appRouter
