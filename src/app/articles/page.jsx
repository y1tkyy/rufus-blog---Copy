"use client";

import { Suspense } from "react";
import ArticlesPageContent from "./ArticlesPageContent";

const ArticlesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticlesPageContent />
    </Suspense>
  );
};

export default ArticlesPage;
