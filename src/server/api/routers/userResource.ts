import { createTRPCRouter, publicProcedure } from "../trpc"

export const userResource = createTRPCRouter( {
  listAdmin: publicProcedure.query( async ( { ctx } ) => {
    const user = await ctx.prisma.user.findMany( { where: { isAdmin: true } } )
    return user
  } )
} )
