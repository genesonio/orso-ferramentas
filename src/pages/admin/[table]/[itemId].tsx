import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { api } from "../../../utils/api";

interface Item {
  id: string;
  name?: string | null;
  title?: string | null;
  subTitle?: string | null;
}

const Item = () => {
  const [item, setItem] = useState<Item>();
  const router = useRouter();
  const { table, itemId } = router.query;
  let carousel;
  let tools;
  let logos;

  useEffect(() => {
    if (typeof itemId != "string") return;
    carousel = api.carousel.getOne.useQuery(itemId);
    tools = api.tools.getOne.useQuery(itemId);
    logos = api.logos.getOne.useQuery(itemId);

    if (table == "carousel" && carousel) setItem(carousel);
    if (table == "tools" && tools) setItem(tools);
    if (table == "logos" && logos) setItem(logos);
  }, [itemId, table]);

  console.log(item);

  return <section>{}</section>;
};

export default Item;
