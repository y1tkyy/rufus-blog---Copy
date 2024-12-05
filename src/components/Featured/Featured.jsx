import Card from "@/components/Card/Card";
import { ARTICLES } from "@/data/index";

const Articles = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="max-w-[1440px] w-full px-5 lg:p-20">
        <h2 className="font-bold text-center xl:text-left text-[2rem] md:text-4xl mb-9">
          Artículos destacados
        </h2>
        <div className="flex flex-col items-center xl:grid grid-cols-[46%_1fr] grid-rows-[h-fit, h-fit] gap-9 xl:gap-8 mb-12 h-full">
          {(() => {
            const featuredArticles = ARTICLES.filter(
              (article) => article.featured
            );

            const combinedArticles = [
              ...featuredArticles,
              ...ARTICLES.filter(
                (article) => !featuredArticles.includes(article)
              ),
            ].slice(0, 3);

            return combinedArticles.map((article, index) => {
              const className =
                index === 0
                  ? "row-span-2"
                  : index === 1
                  ? "xl:flex xl:flex-row-reverse h-full"
                  : "xl:flex xl:flex-row-reverse col-start-2 row-start-2 h-full";

              const variant = index === 0 ? "2x1" : "1x1";

              return (
                <Card
                  key={index}
                  variant={variant}
                  className={className}
                  image={article.image}
                  genre={article.genre}
                  author={article.author}
                  date={article.date}
                  title={article.title}
                  paragraph={article.paragraph}
                />
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
};

export default Articles;
