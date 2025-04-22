import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay un usuario autenticado al cargar la aplicación
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('authToken');
        
        if (storedUser && token) {
          // Aquí iría la verificación del token con el backend
          // Por ahora solo restauramos el usuario almacenado
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
        // Si hay un error, limpiamos el almacenamiento local
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Aquí iría la llamada al backend para autenticar
      // Por ahora simulamos una autenticación exitosa
      if (email === 'admin@stockify.pro' && password === 'StockifyPro2024!@#') {
        const user = {
          id: '1',
          email: 'admin@stockify.pro',
          name: 'Administrador'
        };
        setUser(user);
        // Guardamos tanto el usuario como el token
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authToken', 'dummy-token');
        navigate('/admin/blog');
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    // Limpiamos tanto el usuario como el token
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}; 