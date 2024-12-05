"use client";

import Button from "@/components/Button/Button";
import styles from "@/pages/Articles/Article.module.scss";
import Card from "@/components/Card/Card";
import { ARTICLES } from "@/data/index";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Articles = ({ initialFilter }) => {
  const [filter, setFilter] = useState(initialFilter || "none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const filterSectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setFilter(initialFilter || "none");
  }, [initialFilter]);

  const applyFilter = (newFilter) => {
    const updatedFilter = filter === newFilter ? "none" : newFilter;
    setFilter(updatedFilter);
    setCurrentPage(1);

    const params = new URLSearchParams(window.location.search);
    if (updatedFilter === "none") {
      params.delete("filter");
    } else {
      params.set("filter", updatedFilter);
    }
    router.push(`/articles?${params.toString()}`);
    scrollToFilter();
  };

  const filteredArticles = ARTICLES.filter(
    (article) => filter === "none" || article.genre.includes(filter)
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      scrollToFilter();
    }
  };

  const scrollToFilter = () => {
    if (filterSectionRef.current) {
      filterSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filters = [...new Set(ARTICLES.flatMap((article) => article.genre))];

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-[1440px] w-full mt-16 lg:mt-[6.25rem]">
        <div className="flex flex-col items-center gap-6 max-w-3xl m-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            Conocé todos nuestros artículos
          </h2>
          <p className="text-center text-base lg:text-lg">
            Mantente actualizado y aprende sobre publicidad digital, casos de
            éxito, creatividad y los temas más interesantes de la industria.
          </p>
        </div>
        <div
          ref={filterSectionRef}
          className="flex items-center justify-center py-12 lg:py-[3.75rem] pl-5"
        >
          <span className="text-base font-bold mr-4">Filtrar:</span>
          <div
            className={`flex gap-4 overflow-x-auto text-nowrap ${styles.scrollbar}`}
          >
            {filters.map((filterLabel, index) => (
              <Button
                variant={filter === filterLabel ? "filterSelected" : "filter"} // Adjust variant based on filter state
                label={filterLabel}
                key={index}
                onClick={() => applyFilter(filterLabel)}
              />
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col items-center md:grid ${
            paginatedArticles.length > 3
              ? "md:grid-cols-2 md:grid-rows-2"
              : "sm:grid-cols-1 sm:grid-rows-1"
          }
  xl:grid-cols-3 px-5 xl:px-20 gap-x-8 gap-y-8 xl:gap-y-[3.75rem]`}
        >
          {paginatedArticles.map((article, index) => (
            <Card
              className={article.className}
              image={article.image}
              genre={article.genre}
              author={article.author}
              date={article.date}
              title={article.title}
              paragraph={article.paragraph}
              key={index}
            />
          ))}
        </div>
        <div className="my-12 px-5 lg:px-20 w-full flex items-center justify-center">
          {totalPages > 1 && (
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex gap-2">
                <Button
                  label="Anterior"
                  variant="paginationLeft"
                  onClick={() => goToPage(currentPage - 1)}
                  className={
                    currentPage === 1 ? "border-gray-500 text-gray-500" : ""
                  }
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    label={`${i + 1}`}
                    variant={
                      i === currentPage - 1
                        ? "paginationSelected"
                        : "pagination"
                    }
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className="hidden md:block"
                  />
                ))}
                <Button
                  label="Siguiente"
                  variant="paginationRight"
                  onClick={() => goToPage(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "border-gray-500 text-gray-500"
                      : ""
                  }
                  disabled={currentPage === totalPages}
                />
              </div>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    label={`${i + 1}`}
                    variant={
                      i === currentPage - 1
                        ? "paginationSelected"
                        : "pagination"
                    }
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className="block md:hidden"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
