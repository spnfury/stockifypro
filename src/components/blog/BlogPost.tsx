import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Eye } from 'lucide-react';
import { Article } from '../../types/article';
import Head from '../Head';

interface BlogPostProps {
  article: Article;
  onViewCountUpdate: (articleId: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ article, onViewCountUpdate }) => {
  const hasIncremented = useRef(false);

  useEffect(() => {
    // Solo incrementar el contador si no se ha incrementado en esta sesión
    if (!hasIncremented.current) {
      onViewCountUpdate(article.id);
      hasIncremented.current = true;
    }
  }, [article.id, onViewCountUpdate]);

  return (
    <>
      <Head
        title={article.metaTitle || article.title}
        description={article.metaDescription || article.excerpt}
        keywords={article.metaKeywords}
        ogTitle={article.metaTitle || article.title}
        ogDescription={article.metaDescription || article.excerpt}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-[#0F172A] hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al blog
        </Link>

        <article className="bg-white rounded-xl shadow-sm p-8">
          {article.imageUrl && (
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-[#0F172A] mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{Math.ceil(article.content.length / 200)} min lectura</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{article.viewCount} visitas</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mt-8">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost; 