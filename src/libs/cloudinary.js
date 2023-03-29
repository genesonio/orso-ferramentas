/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { v2 as cloudinary } from "cloudinary";

import { env } from "../env.mjs";

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: env.CLOUDINARY_API,
  api_secret: env.CLOUDINARY_SK,
});

export const Delete = async (id) => {
  const public_id = "my-uploads/" + id;
  const res = await cloudinary.api.delete_resources(public_id, (res) =>
    console.log(res)
  );
  return res;
};
