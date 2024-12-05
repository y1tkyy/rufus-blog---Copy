import arrowRight from "@/assets/icons/arrowRight.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import Image from "next/image";

const Button = ({ variant = "base", label, onClick, className = "" }) => {
  const baseClasses =
    "flex items-center justify-center rounded-[1.75rem] transition duration-200 ease-in-out";
  const variantStyles = {
    base: `w-fit h-fit px-6 py-4 bg-purple text-white font-bold lg:rounded-[3.75rem] hover:bg-purple-dark`,
    filter: `bg-purple text-white px-4 py-2 hover:bg-purple-dark`,
    filterSelected: `bg-purple-dark text-white px-4 py-2 hover:bg-purple-darker`,
    white: `px-10 py-4 bg-white text-black font-bold lg:rounded-[3.75rem] hover:bg-gray-200`,
    pagination: `bg-transparent text-black border border-black rounded-full w-10 h-10 hover:bg-black hover:text-white`,
    paginationLeft: `border border-black justify-between h-10 px-6 hover:bg-gray-200 hover:text-black`,
    paginationRight: `border border-black justify-between h-10 px-6 hover:bg-gray-200 hover:text-black`,
    paginationSelected: `border border-black bg-black text-white rounded-full w-10 h-10 hover:bg-gray-800`,
  };

  const getVariantClass = () =>
    variantStyles[variant]
      ? `${className} ${baseClasses} ${variantStyles[variant]}`
      : `${className}${baseClasses}`;

  const renderIcon = (variant, position) => {
    const icons = {
      paginationLeft: (
        <Image src={arrowLeft} alt={label || "button image"} className="mr-2" />
      ),
      paginationRight: (
        <Image
          src={arrowRight}
          alt={label || "button image"}
          className="ml-2"
        />
      ),
    };
    return icons[variant] && position === variant ? icons[variant] : null;
  };

  return (
    <button className={`${getVariantClass()} ${className}`} onClick={onClick}>
      {renderIcon(variant, "paginationLeft")}
      {label && <span className="flex-shrink-0">{label}</span>}
      {renderIcon(variant, "paginationRight")}
    </button>
  );
};

export default Button;
