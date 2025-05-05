import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (newLanguage: string) => {
    const path = location.pathname;
    const isAdminRoute = path.startsWith('/admin');
    
    // Don't change language for admin routes
    if (isAdminRoute) return;

    setLanguage(newLanguage);
    
    // If the path already has a language prefix, replace it
    if (/^\/[a-z]{2}(\/|$)/.test(path)) {
      const newPath = path.replace(/^\/[a-z]{2}/, `/${newLanguage}`);
      navigate(newPath);
    } else {
      // If no language prefix, add it
      navigate(`/${newLanguage}${path === '/' ? '' : path}`);
    }
  };

  return (
    <select
      value={language}
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="ml-4 inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LanguageSelector; 