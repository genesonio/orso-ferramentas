import { useState } from "react";

import { api } from "../utils/api";

import ManageItem from "./ManageItem";

const Manage = () => {
  const [table, setTable] = useState<"carousel" | "logos" | "tools">(
    "carousel"
  );

  const { data } = api.photos.list.useQuery();

  if (!data || data.length == 0) return <h1>No data found!</h1>;

  const haveCarousel = data.some((photo) => photo.toShow === "carousel");
  const haveLogos = data.some((photo) => photo.toShow === "logos");
  const haveTools = data.some((photo) => photo.toShow === "tools");

  return (
    <>
      <nav>
        <ul className="flex gap-x-2">
          <li
            className={`${
              table === "carousel" ? "font-bold" : ""
            } cursor-pointer`}
            onClick={() => setTable("carousel")}
          >
            Carrossel
          </li>
          <li
            className={`${table === "logos" ? "font-bold" : ""} cursor-pointer`}
            onClick={() => setTable("logos")}
          >
            Logos
          </li>
          <li
            className={`${table === "tools" ? "font-bold" : ""} cursor-pointer`}
            onClick={() => setTable("tools")}
          >
            Catálogo
          </li>
        </ul>
      </nav>

      <section className="mt-8 grid w-[80vw] grid-cols-manage8 justify-items-center gap-x-2 max-[1440px]:grid-cols-manage7 max-[1200px]:grid-cols-manage6 max-[1020px]:grid-cols-manage5 max-[840px]:grid-cols-manage4 max-[675px]:grid-cols-manage3 max-[570px]:grid-cols-manage2 max-[350px]:grid-cols-manage1">
        {data.map((item, index) => {
          if (item.toShow === table) {
            return <ManageItem key={index} data={item} />;
          }
        })}
        {table === "carousel" && !haveCarousel && (
          <h1 className="col-span-full font-bold italic">Nothing to show.</h1>
        )}
        {table === "logos" && !haveLogos && (
          <h1 className="col-span-full font-bold italic">Nothing to show.</h1>
        )}
        {table === "tools" && !haveTools && (
          <h1 className="col-span-full font-bold italic">Nothing to show.</h1>
        )}
      </section>
    </>
  );
};

export default Manage;
