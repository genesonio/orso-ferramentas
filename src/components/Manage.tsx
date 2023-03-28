import { useState } from "react";
import { api } from "../utils/api";
import NaturalImage from "./NaturalImage";

const Manage = () => {
  const [table, setTable] = useState<"carousel" | "logos" | "catalogo">(
    "carousel"
  );

  const { data: tools } = api.tools.list.useQuery();
  const { data: logos } = api.logos.list.useQuery();
  const { data: carousel } = api.carousel.list.useQuery();

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
            className={`${
              table === "catalogo" ? "font-bold" : ""
            } cursor-pointer`}
            onClick={() => setTable("catalogo")}
          >
            Catálogo
          </li>
        </ul>
      </nav>
      <section className="mt-8 grid w-[80vw] grid-cols-manage8 justify-items-center gap-x-2 max-[1440px]:grid-cols-manage7 max-[1200px]:grid-cols-manage6 max-[1020px]:grid-cols-manage5 max-[840px]:grid-cols-manage4 max-[675px]:grid-cols-manage3 max-[570px]:grid-cols-manage2 max-[350px]:grid-cols-manage1">
        {table === "carousel" &&
          carousel?.map((data, index) => (
            <div className="flex w-32 flex-col text-center" key={index}>
              <div className="w-32">
                <NaturalImage src={data.photo} alt="" />
              </div>
              {data?.title && <h1 className="mt-2 font-bold">{data.title}</h1>}
              {data?.subTitle && (
                <h2 className="mt-1 italic">{data.subTitle}</h2>
              )}
            </div>
          ))}
        {table === "catalogo" &&
          tools?.map((data, index) => (
            <div className="flex w-32 flex-col gap-x-4 text-center" key={index}>
              <div className="w-32">
                <NaturalImage src={data.photo} alt="" />
              </div>
              {data?.name && <h1 className="font-bold">{data.name}</h1>}
            </div>
          ))}
      </section>
    </>
  );
};

export default Manage;
