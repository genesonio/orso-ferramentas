/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/swiper.css";

import NaturalImage from "../components/NaturalImage";
import Menu from "../components/Menu";

import { type NextPage } from "next";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const images = [
    "/orso/elevacar_texto.png",
    "/orso/ferramentas_texto.png",
    "/orso/pneumatica_texto.png",
  ];

  const logos = [
    "/empresas/cartec.png",
    "/empresas/celfer.png",
    "/empresas/chimonek.png",
    "/empresas/Emeb.png",
    "/empresas/engecass.svg",
    "/empresas/felar.png",
    "/empresas/kingtony.png",
    "/empresas/m7.svg",
    "/empresas/planatc.png",
    "/empresas/raven.png",
    "/empresas/sigma.png",
    "/empresas/uniao.png",
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
            {images.map((url, index) => (
              <SwiperSlide key={index}>
                <NaturalImage src={url} alt="" />
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
            {logos.map((url, index) => (
              <SwiperSlide key={index}>
                <Image fill style={{ objectFit: "contain" }} src={url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section
          id="about"
          className="flex h-screen flex-col gap-[2rem] pt-24 max-sm:h-fit"
        >
          <h1 className="text-center text-5xl font-semibold">Sobre nós</h1>
          <p className="mx-auto w-auto max-w-lg text-center">
            Bem-vindo à nossa empresa de vendas de ferramentas automotivas!
            Trabalhamos com as melhores marcas do mercado, temos uma ampla
            variedade de ferramentas para atender às suas necessidades, sejam
            elas para uso profissional ou caseiro.
          </p>

          <div className="flex h-[520px] w-full justify-between gap-x-8 rounded-3xl bg-[#272727] py-8 px-8 text-[#d4d4d4] shadow max-[950px]:items-center max-sm:h-fit max-sm:flex-col max-sm:gap-y-8 max-sm:gap-x-0">
            <div className="flex flex-col justify-center gap-3 xl:ml-[10%]">
              <h1 className="text-4xl font-semibold">Nossa missão</h1>
              <p className="w-auto max-w-lg text-justify">
                Entregar ferramentas especiais com qualidade e confiabilidade,
                superando as expectativas dos clientes. Utilizamos materiais de
                alta qualidade e tecnologias avançadas em nossa produção.
                Oferecemos suporte técnico e atendimento excepcional para
                garantir a satisfação dos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-[950px]:max-h-[70%] max-[950px]:items-center xl:mr-[10%]">
              <div className="relative h-[200px] w-[200px]">
                <Image
                  fill
                  src="/missao1.jpg"
                  alt=""
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="relative h-[200px] w-[200px]">
                <Image
                  fill
                  src="/missao2.jpg"
                  alt=""
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="relative col-span-2 h-[250px] w-[420px]">
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
          className="flex h-screen gap-12 pt-11 max-[425px]:pt-20"
        >
          <NaturalImage
            alt=""
            src="/contato.jpg"
            className="w-1/2 object-cover max-md:hidden"
          />

          <div className="flex w-1/2 flex-col gap-16 pt-12 max-md:w-full max-md:pt-2">
            <h1 className="text-center text-5xl font-bold">Contato</h1>
            <p className="text-justify">
              Estamos ansiosos para ouvir de você! Se você tiver alguma dúvida
              ou quiser saber mais sobre nossos produtos, não hesite em nos
              contatar. Nossa equipe de atendimento ao cliente está disponível
              para ajudar a responder a quaisquer perguntas que você possa ter.
              Você pode entrar em contato conosco por telefone, e-mail ou
              através de nossas redes sociais.
            </p>
            <div className="flex justify-between gap-5 max-[950px]:flex-col max-[950px]:overflow-x-hidden max-md:flex-row max-sm:flex-col">
              <div className="">
                <p>Celular: </p>
                <p>(48) 9 9821-0444</p>
                <div className="flex gap-5">
                  <button
                    className="relative h-8 w-8 hover:translate-y-[-1px] active:translate-y-[1px]"
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
                    className="relative h-7 w-7 hover:translate-y-[-1px] active:translate-y-[1px]"
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
                  className="relative h-8 w-8 hover:translate-y-[-1px] active:translate-y-[1px]"
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

        <Footer />
      </main>
    </>
  );
};

export default Home;
