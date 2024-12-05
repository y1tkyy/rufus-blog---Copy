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

  return <div>Article</div>;
};

export default ArticlePage;
