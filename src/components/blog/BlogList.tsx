import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search, Tag } from 'lucide-react';
import { Article, Category } from '../../types/article';

interface BlogListProps {
  articles: Article[];
}

const BlogList: React.FC<BlogListProps> = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extraer todas las categorías únicas de los artículos
  const allCategories = Array.from(
    new Set(articles.flatMap(article => article.categories))
  );

  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      !selectedCategory || 
      article.categories.some(cat => cat.id === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre las últimas novedades, consejos y tendencias en ecommerce, gestión de pedidos y automatización de envíos.
        </p>
      </div>

      {/* Search and Categories */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar artículos..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:border-[#0F172A]"
              />
            </div>
          </div>

          {/* Categories Dropdown */}
          <div className="w-full md:w-64">
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F172A] focus:border-[#0F172A]"
            >
              <option value="">Todas las categorías</option>
              {allCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.id}`}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            {article.imageUrl && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.categories.map((category) => (
                  <span
                    key={category.id}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0F172A]/10 text-[#0F172A]"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {category.name}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{Math.ceil(article.content.length / 200)} min lectura</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No se encontraron artículos que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogList; 