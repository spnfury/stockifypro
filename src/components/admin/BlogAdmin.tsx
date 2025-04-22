import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, LogOut } from 'lucide-react';
import { useAuth } from '../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../types/article';

interface BlogAdminProps {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const BlogAdmin: React.FC<BlogAdminProps> = ({ articles, setArticles }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  const handleSave = async (article: Article) => {
    setIsLoading(true);
    try {
      // Aquí iría la lógica para guardar en la base de datos
      if (article.id) {
        // Actualizar artículo existente
        setArticles(articles.map(a => a.id === article.id ? article : a));
      } else {
        // Crear nuevo artículo
        const newArticle = { ...article, id: Date.now().toString() };
        setArticles([...articles, newArticle]);
      }
      setEditingArticle(null);
    } catch (error) {
      console.error('Error al guardar el artículo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      setIsLoading(true);
      try {
        // Aquí iría la lógica para eliminar de la base de datos
        setArticles(articles.filter(a => a.id !== id));
      } catch (error) {
        console.error('Error al eliminar el artículo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A]">Gestión de Artículos del Blog</h1>
          <p className="text-gray-600 mt-1">Bienvenido, {user.name}</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setEditingArticle({
              id: '',
              title: '',
              content: '',
              excerpt: '',
              imageUrl: '',
              published: false,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            })}
            className="bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#1E293B] flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Nuevo Artículo
          </button>
          <button
            onClick={logout}
            className="text-gray-600 hover:text-red-600 flex items-center gap-2"
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </button>
        </div>
      </div>

      {editingArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editingArticle.id ? 'Editar Artículo' : 'Nuevo Artículo'}
              </h2>
              <button
                onClick={() => setEditingArticle(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSave(editingArticle);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título
                  </label>
                  <input
                    type="text"
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Extracto
                  </label>
                  <textarea
                    value={editingArticle.excerpt}
                    onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contenido
                  </label>
                  <textarea
                    value={editingArticle.content}
                    onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={10}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL de la imagen
                  </label>
                  <input
                    type="url"
                    value={editingArticle.imageUrl}
                    onChange={(e) => setEditingArticle({ ...editingArticle, imageUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    checked={editingArticle.published}
                    onChange={(e) => setEditingArticle({ ...editingArticle, published: e.target.checked })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                    Publicado
                  </label>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditingArticle(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#1E293B] flex items-center gap-2"
                >
                  <Save className="h-5 w-5" />
                  {isLoading ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-[#0F172A]">{article.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingArticle(article)}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{new Date(article.createdAt).toLocaleDateString()}</span>
              <span className={`px-2 py-1 rounded-full ${
                article.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {article.published ? 'Publicado' : 'Borrador'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdmin; 