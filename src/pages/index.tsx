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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => console.error(err));
  };

  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Orso Ferramentas</title>
        <meta name="description" content="Orso Ferramentas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-11/12 flex-col bg-gray-200">
        <nav className="fixed top-0 z-50 flex h-20 w-[100vw] items-center justify-between self-center bg-gray-200 px-[5%] shadow-sm shadow-[#666] ">
          <div className="relative h-16 w-16">
            <Image
              src="/logo.svg"
              fill
              alt="Logotipo"
              className="object-cover"
            />
          </div>

          <ul className="flex gap-7">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="">Catálogo</a>
            </li>
          </ul>
        </nav>

        <section id="home" className="flex h-[800px] flex-col gap-10 pt-24">
          <Swiper
            grabCursor={true}
            className="mx-auto h-[35vw] w-full rounded-3xl max-sm:h-[45vw]"
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
            grabCursor={true}
            className="mx-auto h-[100px] w-full"
            slidesPerView={9}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {logos.map((url, index) => (
              <SwiperSlide key={index}>
                <Image fill style={{ objectFit: "contain" }} src={url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section
          id="sobre"
          className="flex h-[970px] flex-col gap-[2rem] pt-24"
        >
          <h1 className="text-center text-5xl font-semibold">Sobre nós</h1>
          <p className="mx-auto w-[36rem] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            vestibulum neque. Suspendisse nec tempus orci, at pulvinar ante. Nam
            sem mi, tempor id sapien nec, feugiat tincidunt enim. Nullam.
          </p>

          <div className="flex h-[520px] w-full justify-between rounded-3xl bg-white py-8 px-8 shadow">
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-2xl font-semibold">Nossa missão</h1>
              <p className="w-96 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur hendrerit dui vel venenatis mattis. Aenean iaculis
                velit ut blandit ornare. Morbi nisl tortor, dapibus id lorem ut,
                auctor egestas augue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                className="rounded-2xl"
                src="http://lorempixel.com.br/200/200/?1"
                alt=""
              />
              <img
                className="rounded-2xl"
                src="http://lorempixel.com.br/200/200/?2"
                alt=""
              />
              <img
                src="http://lorempixel.com.br/420/250/?3"
                alt=""
                className="col-span-2 rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="p flex h-[800px] gap-12 pt-20 ">
          <div className="relative h-full w-1/2">
            <Image
              fill
              alt=""
              className="object-cover"
              src="http://lorempixel.com.br/1080/1080"
            />
          </div>

          <div className="flex w-1/2 flex-col gap-16 pt-12">
            <h1 className="text-center text-5xl font-bold">Contato</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor eu enim nec molestie. Duis molestie libero eu urna interdum
              iaculis. Vestibulum nec mattis massa, id tincidunt arcu.
              Pellentesque pharetra justo leo, id tempus nisl sollicitudin eget.
              Fusce faucibus egestas erat eu accumsan.
            </p>
            <div className="flex justify-between gap-5">
              <div className="">
                <p>Celular: </p>
                <p>(48) 9 9821-0444</p>
                <div className="flex gap-5">
                  <button
                    className="relative h-8 w-8"
                    onClick={() => handleCopy("48998210444")}
                  >
                    <Image
                      fill
                      className="object-cover"
                      src="/copy.svg"
                      alt="Copy button"
                    />
                  </button>
                  <a
                    className="relative h-8 w-8"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/5548998210444?text=Olá,%20gostaria%20de%20um%20orçamento."
                  >
                    <Image
                      fill
                      className="object-cover"
                      src="/whatsapp.svg"
                      alt="Whatsapp button"
                    />
                  </a>
                </div>
              </div>
              <div className="">
                <p>Email:</p>
                <p>orsoferramentas@exemplo.com</p>
                <button
                  className="relative h-8 w-8"
                  onClick={() => handleCopy("orsoferramentas@exemplo.com")}
                >
                  <Image
                    fill
                    className="object-cover"
                    src="/copy.svg"
                    alt="Copy button"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex h-20 w-full items-center justify-between">
          <div>
            <p>&copy; Orso Ferramentas {year}</p>
          </div>
          <div className="relative h-6 w-6">
            <a
              className=""
              href="http://www.instagram.com/orsoferramentas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fill
                className="object-cover"
                src="/instagram.svg"
                alt="Instagram logo"
              />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
