import React from 'react';
import { useParams } from 'react-router-dom';
import BlogSection from './BlogSection';

const BlogDetail = React.lazy(() => import('./BlogDetail'));

const Blog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <BlogDetail slug={slug} />
      </React.Suspense>
    );
  }
  
  return (
    <>
      <BlogSection />
    </>
  );
};

export default Blog;
