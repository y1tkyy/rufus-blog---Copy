import { ARTICLES } from "@/data/index";

const ArticlePage = ({ params }) => {
  const { slug } = params;

  const article = ARTICLES.find(
    (article) =>
      article.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === slug
  );

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.paragraph}</p>
      <p>Autor: {article.author}</p>
      <p>
        Fecha: {article.date.day} {article.date.month}, {article.date.year}
      </p>
      <img src={article.image.src} alt={article.title} />
    </div>
  );
};

export default ArticlePage;
