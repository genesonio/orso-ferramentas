import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const logosResource = createTRPCRouter( {
  upload: publicProcedure.input( z.object( {
    name: z.string().optional(),
    photo: z.string()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { name, photo } = input
    if ( name ) {
      await ctx.prisma.logos.create( {
        data: {
          name,
          photo
        }
      } )
    } else {
      await ctx.prisma.logos.create( {
        data: {
          photo
        }
      } )
    }
  } ),
  list: publicProcedure.query( async ( { ctx } ) => {
    const logos = await ctx.prisma.logos.findMany()
    return logos
  } ),
  getOne: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    const logo = await ctx.prisma.logos.findUnique( { where: { id: input } } )
    return logo
  } ),
  update: publicProcedure.input( z.object( {
    id: z.string(),
    name: z.string().optional(),
    photo: z.string()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { id, name, photo } = input
    await ctx.prisma.logos.update( {
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
    await ctx.prisma.logos.delete( { where: { id: input } } )
  } )
} )
