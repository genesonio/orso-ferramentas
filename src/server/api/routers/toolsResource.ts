import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const toolsResource = createTRPCRouter( {
  upload: publicProcedure.input( z.object( {
    name: z.string(),
    photo: z.string()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { name, photo } = input
    await ctx.prisma.tools.create( {
      data: {
        name,
        photo
      }
    } )
  } ),
  list: publicProcedure.query( async ( { ctx } ) => {
    const tools = await ctx.prisma.tools.findMany()
    return tools
  } ),
  getOne: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    const tool = await ctx.prisma.tools.findUnique( { where: { id: input } } )
    return tool
  } ),
  update: publicProcedure.input( z.object( {
    id: z.string(),
    name: z.string(),
    photo: z.string()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { id, name, photo } = input
    await ctx.prisma.tools.update( {
      data: {
        name,
        photo
      },
      where: {
        id
      }
    } )
  } ),
  delete: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    await ctx.prisma.tools.delete( { where: { id: input } } )
  } )
} )
