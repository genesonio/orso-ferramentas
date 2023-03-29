import { useState } from "react";
import Image from "next/image";

import type { FC } from "react";

interface NaturalImage extends React.HTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

const NaturalImage: FC<NaturalImage> = ({ src, alt, ...props }) => {
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9

  if (!src) return <></>;

  return (
    <Image
      {...props}
      // set the dimension (affected by layout)
      width={9000}
      height={9000 / ratio}
      /* fill */ // you can use "responsive", "fill" or the default "intrinsic"
      alt={alt}
      src={src}
      placeholder="empty"
      onLoadingComplete={({
        naturalWidth,
        naturalHeight,
      }: {
        naturalWidth: number;
        naturalHeight: number;
      }) => {
        if (naturalHeight === 0 && naturalWidth === 0) {
          setRatio(16 / 9);
        } else {
          setRatio(naturalWidth / naturalHeight);
        }
      }}
    />
  );
};

export default NaturalImage;
