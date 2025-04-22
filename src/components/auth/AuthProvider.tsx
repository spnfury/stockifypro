import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: false,
  login: () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si hay un usuario autenticado en localStorage al cargar
    const storedUser = localStorage.getItem('admin_authenticated');
    if (storedUser === 'true') {
      setUser(true);
    }
  }, []);

  const login = (password: string): boolean => {
    // Contraseña de administración
    if (password === 'Stockify2024!') {
      setUser(true);
      localStorage.setItem('admin_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem('admin_authenticated');
  };

  const value = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 