import { useState } from "react";

import NaturalImage from "./NaturalImage";

import type { ChangeEvent, MouseEvent } from "react";
import { api } from "../utils/api";

interface PhotoObj {
  toShow: string;
  name?: string;
  title?: string;
  subTitle?: string;
}

const Upload = () => {
  const [photo, setPhoto] = useState<File | string | Iterable<Uint8Array>>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [table, setTable] = useState<"carousel" | "logos" | "tools">(
    "carousel"
  );
  const [photoObj, setPhotoObj] = useState<PhotoObj>({ toShow: "carousel" });

  const mutation = api.photos.upload.useMutation();

  const handleTable = (e: ChangeEvent<HTMLSelectElement>) => {
    setTable(e.target.value as "carousel" | "logos" | "tools");
    setPhotoObj({
      ...photoObj,
      toShow: e.target.value,
    });
  };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.files ||
      typeof e.target.files == "undefined" ||
      !e.target.files[0]
    )
      return;
    setPhoto(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const temp = photoObj;
    setPhotoObj({ ...temp, [name]: value });
  };

  const handleUpload = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", photo as string);
    formData.append("upload_preset", "my-uploads");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: { secure_url: string; public_id: string } = await fetch(
      "https://api.cloudinary.com/v1_1/orso-ferramentas/image/upload",
      {
        method: "POST",
        body: formData,
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    ).then((r) => r.json());
    console.log(data);

    const secureUrl = data.secure_url;
    const id = data.public_id.slice(11);
    console.log(id);

    mutation.mutate({
      ...photoObj,
      id,
      photo: secureUrl,
    });

    window.location.reload();
  };

  return (
    <>
      <form className="flex max-w-sm flex-col gap-y-6">
        <div className="flex gap-x-4">
          <label htmlFor="toShow">Para: </label>
          <select onChange={(e) => handleTable(e)} name="toShow" id="toShow">
            <optgroup>
              <option value="carousel">Carrossel</option>
              <option value="logo">Logos</option>
              <option value="catalogo">Catálogo</option>
            </optgroup>
          </select>
        </div>
        <div className="flex gap-x-4">
          <label htmlFor="image">Foto:</label>
          <input
            onChange={(e) => handlePhoto(e)}
            type="file"
            name="image"
            id="image"
          />
        </div>
        {table != "carousel" ? (
          <>
            <div className="flex gap-x-4">
              <label htmlFor="name">Nome:</label>
              <input
                onChange={(e) => handleChange(e)}
                value={photoObj?.name ? photoObj.name : ""}
                type="text"
                name="name"
                id="name"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-x-4">
              <label htmlFor="title">Título</label>
              <input
                onChange={(e) => handleChange(e)}
                value={photoObj?.title ? photoObj.title : ""}
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div className="flex gap-x-4">
              <label htmlFor="subTitle">Subtítulo</label>
              <input
                onChange={(e) => handleChange(e)}
                value={photoObj?.subTitle ? photoObj.subTitle : ""}
                type="text"
                name="subTitle"
                id="subTitle"
              />
            </div>
          </>
        )}
        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={(e) => handleUpload(e)}
          type="submit"
          className="w-24 rounded-2xl border-2 border-[#666] py-1 px-3 font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]"
        >
          Upload
        </button>
      </form>
      {preview != null && (
        <div className="mt-6 max-w-xl">
          <NaturalImage src={preview} alt="" />
        </div>
      )}
    </>
  );
};
export default Upload;
