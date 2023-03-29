import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const photoResource = createTRPCRouter( {
  upload: publicProcedure.input( z.object( {
    id: z.string(),
    photo: z.string(),
    toShow: z.literal( 'carousel' | 'logos' | 'tools' )
  } ) )
} )
