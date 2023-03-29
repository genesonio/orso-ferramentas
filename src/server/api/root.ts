import { createTRPCRouter } from "./trpc"

import { userResource } from "./routers/userResource"
import { photoResource } from "./routers/photoResource"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter( {
  user: userResource,
  photos: photoResource
} )

// export type definition of API
export type AppRouter = typeof appRouter
