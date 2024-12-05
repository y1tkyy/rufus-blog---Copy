import Image from "next/image";
import hero from "@/assets/images/hero.png";
import Button from "@/components/Button/Button";

const Hero = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="max-w-[1440px] w-full  px-5 py-16 flex flex-col items-center md:flex-row md:gap-10 lg:p-20 lg:gap-20">
        <div className="max-w-[700px] w-full mb-12 lg:m-0 lg:flex lg:flex-col lg:justify-center ">
          <h1 className="font-bold text-[2.5rem] lg:text-[3.375rem] leading-[3rem] mb-6">
            Stay Tuned of the latest Trends and market insights
          </h1>
          <p className="text-base lg:text-lg leading-6 mb-8">
            Si estás buscando inspiración creativa, análisis de tendencias y
            casos de éxito que marcan la diferencia en la industria del
            marketing digital, suscríbete hoy.
          </p>
          <div className="flex flex-col xl:flex-row w-full">
            <input
              type="text"
              className="w-full max-w-80 h-fit px-6 py-4 bg-white text-placeholder border border-black rounded-[3.75rem] mb-4 md:mr-4"
              placeholder="Ingresá tu correo electrónico"
            />
            <Button label="¡Suscríbete ahora!"></Button>
          </div>
        </div>
        <div className="w-full max-w-[500px] flex justify-center items-center">
          <Image src={hero} alt="Hero image"></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
