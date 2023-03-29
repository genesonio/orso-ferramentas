import Link from "next/link";

import NaturalImage from "./NaturalImage";

import type { Photos } from "@prisma/client";

const ManageItem = ({
  table,
  data,
  ...props
}: {
  table: string;
  data: Photos;
}) => {
  return (
    <Link
      {...props}
      href="/admin/[table]/[itemId]"
      as={`/admin/${table}/${data.id}`}
      className="flex w-32 flex-col text-center"
    >
      <div className="w-32">
        <NaturalImage src={data.photo} alt="" />
      </div>
      {data?.title && <h1 className="mt-2 font-bold">{data.title}</h1>}
      {data?.subTitle && <h2 className="mt-1 italic">{data.subTitle}</h2>}
    </Link>
  );
};

export default ManageItem;
