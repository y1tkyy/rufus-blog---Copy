import Image from "next/image";
import Button from "@/components/Button/Button";
import promoImg from "@/assets/images/articles/promo.svg";

const Promo = () => {
  return (
    <section className="w-full flex justify-center">
      <div className=" max-w-[1440px] px-5 lg:px-20 mb-16">
        <div className="flex flex-col md:flex-row bg-purple-dark rounded-[2rem] md:rounded-[3.75rem] w-full px-5 py-12 md:px-20 md:py-[3.75rem] gap-4">
          <div className="flex flex-col justify-center items-center md:items-start pb-12 md:p-0 md:w-1/2">
            <h2 className="text-white font-bold text-[2rem] md:text-[2.5rem] text-center md:text-start mb-6">
              Desbloqueando el poder de los datos y la creatividad
            </h2>
            <p className="text-white text-center md:text-start text-base mb-8">
              Transforma con Rufus las campañas publicitarias mediante la
              combinación perfecta de creatividad y performance.
            </p>
            <Button label="Conoce más"></Button>
          </div>
          <div className="flex justify-center md:justify-end md:w-1/2">
            <Image src={promoImg} alt="Promo image"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
