import { v2 as cloudinary } from 'cloudinary'

import { env } from '../env.mjs'
import convertBase64 from '../utils/convertBase64'


cloudinary.config( {
  cloud_name: env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: env.CLOUDINARY_API,
  api_secret: env.CLOUDINARY_SK,
  secure: true
} )

export const Delete = async ( id: string ) => {
  const res: { "result": string } = await cloudinary.uploader.destroy( id ) as { "result": string }
  console.log( res )
  return res
}

export const Uploader = async ( photo: File ) => {
  const base64 = await convertBase64( photo )
  const res = await cloudinary.uploader.upload( base64 as string )
    .catch( err => console.error( err ) )
  return res
}
