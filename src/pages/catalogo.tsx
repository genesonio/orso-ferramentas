import NaturalImage from "../components/NaturalImage";
import Footer from "../components/Footer";

const Catalogo = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <main className="flex w-11/12 flex-col">
      <section className="flex h-fit min-h-screen flex-col gap-10 pt-24">
        <h1 className="text-center text-6xl font-bold">Catálogo</h1>
        <div className="grid grid-cols-7 gap-y-6 max-[1440px]:grid-cols-6 max-[1300px]:grid-cols-5 max-[1100px]:grid-cols-4 max-[875px]:grid-cols-3 max-[666px]:grid-cols-2 max-[444px]:grid-cols-1">
          {num.map((num) => (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/5548991973180?text=Olá,%20gostaria%20de%20um%20orçamento."
              key={num}
              className="relative m-auto h-48 w-48 cursor-pointer max-[444px]:h-64 max-[444px]:w-64"
            >
              <NaturalImage
                src={`http://lorempixel.com.br/300/300?${num}`}
                alt=""
              />
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Catalogo;
