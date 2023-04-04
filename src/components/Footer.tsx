import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative left-[-4.5%] mt-5 flex h-20 w-screen items-center justify-between px-[4.5%] shadow-footer shadow-[#666]">
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
  );
};

export default Footer;
