import { v2 as cloudinary } from 'cloudinary'

import { env } from '../env.mjs'

cloudinary.config( {
  cloud_name: env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: env.CLOUDINARY_API,
  api_secret: env.CLOUDINARY_SK,
  secure: true
} )

export const Uploader = async ( photo: string ) => {
  const res = await cloudinary.uploader.upload( photo )
    .catch( err => console.error( err ) )
  return res
}
