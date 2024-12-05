"use client";

import Articles from "@/pages/Articles/Articles";
import Search from "@/pages/Search/Search";
import { useSearchParams } from "next/navigation";

const ArticlesPageContent = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const filter = searchParams.get("filter") || "";

  return <>{searchTerm ? <Search /> : <Articles initialFilter={filter} />}</>;
};

export default ArticlesPageContent;
