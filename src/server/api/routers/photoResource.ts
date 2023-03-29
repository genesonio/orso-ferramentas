import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const photoResource = createTRPCRouter( {
  upload: publicProcedure.input( z.object( {
    id: z.string(),
    photo: z.string(),
    toShow: z.string(),
    name: z.string().optional(),
    title: z.string().optional(),
    subTitle: z.string().optional()
  } ) ).mutation( async ( { ctx, input } ) => {
    await ctx.prisma.photos.create( {
      data: {
        ...input
      }
    } )
  } ),
  list: publicProcedure.query( async ( { ctx } ) => {
    const data = await ctx.prisma.photos.findMany()
    return data
  } ),
  getOne: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    const data = await ctx.prisma.photos.findUnique( { where: { id: input } } )
    return data
  } ),
  update: publicProcedure.input( z.object( {
    id: z.string(),
    toShow: z.string(),
    name: z.string().optional(),
    title: z.string().optional(),
    subTitle: z.string().optional()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { id, toShow, name, title, subTitle } = input
    await ctx.prisma.photos.update( {
      data: {
        toShow,
        name,
        title,
        subTitle
      },
      where: {
        id
      }
    } )
  } ),
  delete: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    await ctx.prisma.photos.delete( { where: { id: input } } )
  } )
} )
