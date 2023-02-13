import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";

const Home: NextPage = () => {
  const images = [
    "http://lorempixel.com.br/1700/500/?1",
    "http://lorempixel.com.br/1700/500/?2",
    "http://lorempixel.com.br/1700/500/?3",
    "http://lorempixel.com.br/1700/500/?4",
    "http://lorempixel.com.br/1700/500/?5",
    "http://lorempixel.com.br/1700/500/?6",
    "http://lorempixel.com.br/1700/500/?7",
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

        <section className="h-[100vh] bg-slate-500 pt-24">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={800}
            centeredSlides={true}
            modules={[Autoplay, EffectFade]}
            loop={true}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={1}
            className="mx-auto h-[50vh] w-[90vw] rounded-3xl border-2"
          >
            {images.map((url, index) => (
              <SwiperSlide key={index}>
                <img src={url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Home;
