/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/swiper.css";

import NaturalImage from "../components/NaturalImage";
import Footer from "../components/Footer";

import { type NextPage } from "next";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const { data } = api.photos.list.useQuery();

  if (!data || typeof data == "undefined") {
    console.error("Database ERROR");
    return <></>;
  }
  const logos = data.filter((photo) => photo.toShow == "logos" && photo);
  const carousel = data.filter((photo) => photo.toShow == "carousel" && photo);

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

      <main className="flex w-11/12 flex-col">
        <section
          id="home"
          className="flex h-screen flex-col gap-10 pt-20  max-[1025px]:h-[75vh]"
        >
          <Swiper
            className="left-[-4.55%] h-auto w-screen"
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={1500}
            modules={[Autoplay, EffectFade]}
            loop={true}
            slidesPerView={1}
          >
            {carousel.map((photo) => (
              <SwiperSlide key={photo.id}>
                <NaturalImage src={photo.photo} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className="mx-auto h-[100px] w-full max-[426px]:m-auto"
            grabCursor={true}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              425: {
                width: 425,
                slidesPerView: 3,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1024: {
                width: 1024,
                slidesPerView: 5,
              },
              1440: {
                width: 1440,
                slidesPerView: 6,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={logo.photo}
                  alt={`Logo da empresa ${
                    logo.name ? logo.name : "não identificada"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section
          id="about"
          className="flex min-h-screen flex-col gap-[2rem] pt-24 max-sm:h-fit"
        >
          <h1 className="text-center text-5xl font-semibold">Sobre nós</h1>
          <p className="mx-auto w-auto max-w-lg text-center">
            Bem-vindo à nossa empresa de vendas de ferramentas automotivas!
            Trabalhamos com as melhores marcas do mercado, temos uma ampla
            variedade de ferramentas para atender às suas necessidades, sejam
            elas para uso profissional ou caseiro.
          </p>

          <div className="flex h-[520px] w-full justify-between gap-x-8 rounded-3xl bg-[#272727] py-8 px-8 text-[#d4d4d4] shadow max-[950px]:h-fit max-[950px]:flex-col max-[950px]:items-center max-[950px]:gap-y-8 max-[950px]:gap-x-0">
            <div className="flex flex-col justify-center gap-3 xl:ml-[10%]">
              <h1 className="text-4xl font-semibold max-[950px]:text-center">
                Nossa missão
              </h1>
              <p className="w-auto max-w-lg text-justify">
                Entregar ferramentas especiais com qualidade e confiabilidade,
                superando as expectativas dos clientes. Utilizamos materiais de
                alta qualidade e tecnologias avançadas em nossa produção.
                Oferecemos suporte técnico e atendimento excepcional para
                garantir a satisfação dos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-[950px]:items-center max-[550px]:w-full xl:mr-[10%]">
              <div className="relative h-[200px] w-[200px] max-[1150px]:w-[170px] max-[1050px]:h-[150px] max-[1000px]:w-[140px] max-[950px]:h-[200px] max-[950px]:w-[200px] max-[550px]:w-full">
                <Image
                  fill
                  src="/missao1.jpg"
                  alt=""
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="relative h-[200px] w-[200px] max-[1150px]:w-[170px] max-[1050px]:h-[150px] max-[1000px]:w-[140px] max-[950px]:h-[200px] max-[950px]:w-[200px] max-[550px]:w-full">
                <Image
                  fill
                  src="/missao2.jpg"
                  alt=""
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="relative col-span-2 h-[250px] w-[420px] max-[1150px]:w-[360px] max-[1050px]:w-[345px] max-[1000px]:w-[300px] max-[950px]:w-[420px] max-[550px]:w-full">
                <Image
                  fill
                  src="/missao3.jpg"
                  alt=""
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex h-screen gap-12 pt-11 max-[950px]:mt-24 max-[950px]:pt-20 max-[425px]:pt-20"
        >
          <NaturalImage
            alt=""
            src="/contato.jpg"
            className="w-1/2 object-cover max-[950px]:hidden"
          />

          <div className="flex w-1/2 flex-col gap-16 pt-12 max-[950px]:w-full max-[950px]:gap-14 max-[950px]:pt-2">
            <h1 className="text-center text-5xl font-bold">Contato</h1>
            <p className="text-justify">
              Estamos ansiosos para ouvir de você! Se você tiver alguma dúvida
              ou quiser saber mais sobre nossos produtos, não hesite em nos
              contatar. Nossa equipe de atendimento ao cliente está disponível
              para ajudar a responder a quaisquer perguntas que você possa ter.
              Você pode entrar em contato conosco por telefone, e-mail ou
              através de nossas redes sociais.
            </p>
            <div className="flex justify-between gap-5 max-[950px]:flex-col max-[950px]:overflow-x-hidden">
              <div>
                <p>Celular: </p>
                <p>(48) 9 9197-3180</p>
                <div className="mt-2 flex gap-5">
                  <button
                    className="relative h-8 w-8 hover:translate-y-[-1px] active:translate-y-[1px]"
                    onClick={() => handleCopy("48991973180")}
                  >
                    <Image
                      fill
                      className="object-cover"
                      src="/copy.svg"
                      alt="Copy button"
                    />
                  </button>
                  <a
                    className="relative h-7 w-7 hover:translate-y-[-1px] active:translate-y-[1px]"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/5548991973180?text=Olá,%20gostaria%20de%20um%20orçamento."
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
              <div>
                <p>Email:</p>
                <p>orsoferramentas@gmail.com</p>
                <button
                  className="relative mt-2 h-8 w-8 hover:translate-y-[-1px] active:translate-y-[1px]"
                  onClick={() => handleCopy("orsoferramentas@gmail.com")}
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

        <Footer />
      </main>
    </>
  );
};

export default Home;
