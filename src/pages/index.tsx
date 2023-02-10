import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = () => {
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
            loop={true}
            navigation={true}
            grabCursor={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            className="mx-auto h-[50vh] w-[90vw] rounded-3xl border-2"
          ></Swiper>
        </section>
      </main>
    </>
  );
};

export default Home;
