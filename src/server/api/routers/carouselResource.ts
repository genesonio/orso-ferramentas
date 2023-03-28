import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const carouselResource = createTRPCRouter( {
  upload: publicProcedure.input( z.object( {
    id: z.string(),
    title: z.string().optional(),
    subTitle: z.string().optional(),
    photo: z.string()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { id, title, subTitle, photo } = input
    await ctx.prisma.carousel.create( {
      data: {
        id,
        title,
        subTitle,
        photo
      }
    } )
  } ),
  list: publicProcedure.query( async ( { ctx } ) => {
    const images = await ctx.prisma.carousel.findMany()
    return images
  } ),
  getOne: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    const image = await ctx.prisma.carousel.findUnique( { where: { id: input } } )
    return image
  } ),
  update: publicProcedure.input( z.object( {
    id: z.string(),
    title: z.string(),
    subTitle: z.string(),
    photo: z.string()
  } ) ).mutation( async ( { ctx, input } ) => {
    const { id, title, subTitle, photo } = input
    await ctx.prisma.carousel.update( {
      data: {
        title,
        subTitle,
        photo
      },
      where: {
        id
      }
    } )
  } ),
  delete: publicProcedure.input( z.string() ).query( async ( { ctx, input } ) => {
    await ctx.prisma.carousel.delete( { where: { id: input } } )
  } )
} )
