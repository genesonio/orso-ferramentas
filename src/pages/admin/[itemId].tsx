import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { api } from "../../utils/api";

import type { ChangeEvent, MouseEvent } from "react";
import NaturalImage from "../../components/NaturalImage";
import Link from "next/link";

type Photos = {
  id: string;
  photo: string;
  toShow: string;
  name?: string;
  title?: string;
  subTitle?: string;
};

const Item = () => {
  const [item, setItem] = useState<Photos>({ id: "", photo: "", toShow: "" });

  const router = useRouter();
  const { itemId } = router.query;

  const { data } = api.photos.getOne.useQuery(itemId as string);
  const mutation = api.photos.update.useMutation();
  const useDelete = api.photos.delete.useMutation();

  useEffect(() => {
    if (!data) return;
    setItem(data as Photos);
  }, [data]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!item) return;
    mutation.mutate({
      ...item,
    });

    window.location.reload();
  };

  return (
    <section>
      {item ? (
        <form className="mt-24 flex max-w-sm flex-col gap-y-6">
          <Link
            href="/admin"
            className="absolute top-[5%] left-[40%] h-10 w-10"
          >
            <NaturalImage src="/back.svg" alt="back button" />
          </Link>
          <div className="w-52">
            <NaturalImage alt="" src={item.photo} />
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="toShow">Para: </label>
            <select
              value={item.toShow}
              onChange={(e) => handleChange(e)}
              name="toShow"
              id="toShow"
            >
              <optgroup>
                <option value="carousel">Carrossel</option>
                <option value="logo">Logos</option>
                <option value="catalogo">Catálogo</option>
              </optgroup>
            </select>
          </div>
          {item.toShow != "carousel" ? (
            <>
              <div className="flex gap-x-4">
                <label htmlFor="name">Nome:</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={item.name ? item.name : ""}
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
                  value={item.title ? item.title : ""}
                  type="text"
                  name="title"
                  id="title"
                />
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="subTitle">Subtítulo</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={item.subTitle ? item.subTitle : ""}
                  type="text"
                  name="subTitle"
                  id="subTitle"
                />
              </div>
            </>
          )}
          <div className="flex justify-between">
            <input
              type="submit"
              className="w-24 cursor-pointer rounded-2xl border-2 border-[#666] py-1 px-3 font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]"
              onClick={(e) => handleUpdate(e)}
              value="Update"
            />
            <Link
              onClick={() => useDelete.mutate(item.id)}
              href="/admin"
              className="w-24 cursor-pointer rounded-2xl border-2 border-[#666] py-1 px-3 text-center font-bold shadow shadow-[#272727] transition-all hover:translate-y-[-1px] hover:shadow-md hover:shadow-[#272727] active:translate-y-[1px] active:shadow-sm active:shadow-[#272727]"
            >
              Delete
            </Link>
          </div>
        </form>
      ) : (
        <h1>Item not found</h1>
      )}
    </section>
  );
};

export default Item;
