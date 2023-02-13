import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";

const Home: NextPage = () => {
  const images = [
    "http://lorempixel.com.br/1750/?1",
    "http://lorempixel.com.br/1750/?2",
    "http://lorempixel.com.br/1750/?3",
    "http://lorempixel.com.br/1750/?4",
    "http://lorempixel.com.br/1750/?5",
    "http://lorempixel.com.br/1750/?6",
    "http://lorempixel.com.br/1750/?7",
  ];

  const logos = [
    "http://lorempixel.com.br/150/150/?1",
    "http://lorempixel.com.br/150/150/?2",
    "http://lorempixel.com.br/150/150/?3",
    "http://lorempixel.com.br/150/150/?4",
    "http://lorempixel.com.br/150/150/?5",
    "http://lorempixel.com.br/150/150/?6",
    "http://lorempixel.com.br/150/150/?7",
    "http://lorempixel.com.br/150/150/?8",
    "http://lorempixel.com.br/150/150/?9",
    "http://lorempixel.com.br/150/150/?10",
    "http://lorempixel.com.br/150/150/?11",
    "http://lorempixel.com.br/150/150/?12",
    "http://lorempixel.com.br/150/150/?13",
    "http://lorempixel.com.br/150/150/?14",
    "http://lorempixel.com.br/150/150/?15",
    "http://lorempixel.com.br/150/150/?16",
  ];

  return (
    <>
      <Head>
        <title>Orso Ferramentas</title>
        <meta name="description" content="Orso Ferramentas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <nav className="fixed top-0 flex h-20 w-[90vw] items-center justify-between self-center">
          <div className="relative h-16 w-16">
            <Image
              src="/logo.svg"
              fill
              alt="Logotipo"
              className="object-cover"
            />
          </div>
          <ul className="flex w-1/5 justify-between">
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Catálogo</li>
          </ul>
        </nav>

        <section className="flex h-[100vh] flex-col gap-[8rem] bg-slate-500 pt-24">
          <Swiper
            className="mx-auto h-[55vh] w-[90vw] rounded-3xl border-2"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={800}
            modules={[Autoplay, EffectFade]}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
          >
            {images.map((url, index) => (
              <SwiperSlide key={index}>
                <Image fill style={{ objectFit: "cover" }} src={url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className="mx-auto h-[100px] w-[90vw] border-b-2"
            slidesPerView={9}
            autoplay
            loop={true}
            modules={[Autoplay]}
          >
            {logos.map((url, index) => (
              <SwiperSlide key={index}>
                <Image fill style={{ objectFit: "contain" }} src={url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Home;
