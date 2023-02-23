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
            className="mx-auto h-[100px] w-full"
            slidesPerView={9}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
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

          <div className="flex h-[520px] w-full justify-between bg-white py-8 px-8 shadow">
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
              <img src="http://lorempixel.com.br/200/200/?1" alt="" />
              <img src="http://lorempixel.com.br/200/200/?2" alt="" />
              <img
                src="http://lorempixel.com.br/420/250/?3"
                alt=""
                className="col-span-2"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="p flex h-[970px] gap-12 ">
          <div className="relative h-full w-1/2">
            <Image
              fill
              alt=""
              className="object-cover"
              src="http://lorempixel.com.br/1080/1080"
            />
          </div>

          <div className="flex w-1/2 flex-col gap-5 pt-24">
            <h1 className="text-center text-5xl font-bold">Contato</h1>
            <form className="flex w-full flex-col gap-2">
              <label htmlFor="fullName">Nome:</label>
              <input
                className="w-60"
                type="text"
                id="fullName"
                name="fullName"
                required
              />

              <label htmlFor="email">E-mail:</label>
              <input
                className="w-60"
                type="email"
                id="email"
                name="email"
                required
              />

              <label htmlFor="subject">Assunto:</label>
              <input
                className="w-60"
                type="text"
                id="subject"
                name="subject"
                required
              />

              <label htmlFor="message">Mensagem:</label>
              <textarea
                className="h-24 w-80"
                id="message"
                name="message"
                required
              />

              <button
                className="mt-3 h-10 w-24 rounded-2xl border-2 border-gray-700 p-1"
                type="submit"
              >
                Enviar
              </button>
            </form>
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
      </main>
    </>
  );
};

export default Home;
