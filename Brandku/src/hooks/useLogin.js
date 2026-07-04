// src/hooks/useLogin.js
import { useState } from 'react';
import { apiClient } from '../lib/apiClient';

/**
 * Custom hook untuk login — fokus pada pengiriman data ke endpoint /login.
 * Catatan: contoh sederhana untuk pembelajaran, endpoint /login masih di-mock
 * (lihat apiClient.js), belum terhubung ke server asli.
 */
export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post('/login', credentials);

      if (response?.user) {
        setUser(response.user);
      }
      return true; // sukses, biar komponen pemanggil tahu (misal buat nutup modal)
    } catch (err) {
      setError(err.message);
      return false; // gagal
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, error, login, logout };
};