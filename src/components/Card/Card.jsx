import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/assets/icons/link_arrow.svg";

const Card = ({
  variant = "base",
  image,
  genre = [],
  author,
  date = { month: "January", day: "1", year: "2000" },
  title = "Article",
  paragraph,
  className,
  ...props
}) => {
  const baseClasses =
    "w-full rounded-[1.25rem] bg-white max-w-[600px] xl:max-w-full flex flex-col h-full";

  const variantContainerStyles = {
    base: "flex flex-col  h-full py-8 px-5 xl:p-8",
    "2x1": "flex flex-col justify-center h-full py-8 px-5 xl:p-12",
    "1x1": "flex flex-col justify-center h-full py-8 px-5 xl:p-6",
    search: "flex flex-col justify-center h-full py-8 px-5 xl:h-[363px] xl:p-6",
  };

  const variantImageStyles = {
    base: "rounded-t-[1.25rem]",
    "2x1": "xl:rounded-t-[1.25rem] xl:max-h-[260px]",
    "1x1": "xl:rounded-r-[1.25rem] xl:max-w-[260px] w-full",
    search:
      "rounded-t-[1.25rem] xl:rounded-r-none xl:rounded-l-[1.25rem] xl:min-w-[435px]",
  };

  const variantTextStyles = {
    base: {
      genre: "text-base text-purple mr-3",
      date: "text-base my-4 xl:my-3",
      title: "text-2xl font-bold line-clamp-3 overflow-hidden mb-6 xl:mb-4",
      paragraph: "text-base break-words overflow-hidden mb-8 xl:mb-6",
      author: "truncate overflow-hidden text-ellipsis",
    },
    "2x1": {
      genre: "text-base text-purple mr-3",
      date: "text-base my-4 ",
      title: "text-2xl font-bold xl:text-4xl line-clamp-3 overflow-hidden mb-6",
      paragraph: "text-base xl:break-words overflow-hidden mb-8",
      author: "truncate overflow-hidden text-ellipsis",
    },
    "1x1": {
      genre: "text-base text-purple mr-3",
      date: "text-base my-4 xl:my-3",
      title: "text-2xl font-bold line-clamp-3 overflow-hidden mb-6 xl:mb-4",
      paragraph: " text-base break-words overflow-hidden mb-8 xl:mb-6",
      author: "truncate overflow-hidden text-ellipsis",
    },
    search: {
      genre: "text-base text-purple mr-3",
      date: "text-base my-4 xl:my-3",
      title:
        "text-2xl xl:text-[2rem] font-bold xl:leading-snug line-clamp-3 overflow-hidden mb-6 xl:mb-4",
      paragraph: "text-base break-words overflow-hidden mb-8 xl:mb-6",
      author: "truncate overflow-hidden text-ellipsis",
    },
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className={variantImageStyles[variant]}>
        <Image
          src={image}
          alt={`Card image for: ${title}`}
          className={`object-cover h-full w-full ${variantImageStyles[variant]}`}
        />
      </div>

      <div className={`${variantContainerStyles[variant]}`}>
        <div className="w-full">
          {genre.map((genre, index) => (
            <Link
              href={`/articles?filter=${encodeURIComponent(genre)}`}
              className={`${variantTextStyles[variant].genre} w-fit hover:text-purple-dark`}
              key={index}
            >
              {genre}
            </Link>
          ))}
        </div>

        <p
          className={`${variantTextStyles[variant].date} ${variantTextStyles[variant].author}`}
        >
          {author} | {date.month} {date.day}, {date.year}
        </p>
        <h2 className={variantTextStyles[variant].title}>{title}</h2>
        <p className={variantTextStyles[variant].paragraph}>{paragraph}</p>
        <Link
          href={`/articles/${encodeURIComponent(
            title
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, "")
              .trim()
              .replace(/\s+/g, "-")
          )}`}
          className={`flex items-center text-base font-bold text-purple w-fit hover:text-purple-dark`}
        >
          Leer artículo
          <Image src={LinkIcon} alt="Link arrow" className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
