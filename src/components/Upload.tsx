import { useState } from "react";

import NaturalImage from "./NaturalImage";

import type { ChangeEvent } from "react";
import { Uploader } from "../libs/cloudinary";

interface PhotoObj {
  name?: "";
  title?: "";
  subTitle?: "";
}

const Upload = () => {
  const [photo, setPhoto] = useState<File | string | Iterable<Uint8Array>>();
  const [preview, setPreview] = useState<string | null>(null);
  const [table, setTable] = useState<"carousel" | "logo" | "catalogo">(
    "carousel"
  );
  const [photoObj, setPhotoObj] = useState<PhotoObj>();

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.files ||
      typeof e.target.files == "undefined" ||
      !e.target.files[0]
    )
      return;
    setPhoto(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPhotoObj((prev) => {
      return { ...prev, [name]: value };
    });
  };

  /* const handleUpload = () => {
    const res = Uploader(photo as string);
    console.log(res);
  }; */

  return (
    <>
      <div className="flex max-w-sm flex-col gap-y-6">
        <div className="flex gap-x-4">
          <label htmlFor="table">Para: </label>
          <select
            onChange={({ target }) =>
              setTable(target.value as "carousel" | "logo" | "catalogo")
            }
            name="table"
            id="table"
          >
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
          ///onClick={() => handleUpload()}
          className="w-24 rounded-2xl border-2 border-[#666] py-1 px-3 font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]"
        >
          Upload
        </button>
      </div>
      {preview != null && (
        <div className="mt-6 max-w-xl">
          <NaturalImage src={preview} alt="" />
        </div>
      )}
    </>
  );
};
export default Upload;
