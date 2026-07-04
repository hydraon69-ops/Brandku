// src/lib/apiClient.js
// Pembungkus fetch: satu tempat buat semua request GET/POST ke API.
// Endpoint /login di-mock (pura-pura ada server) karena Brandku belum punya backend asli.

export const apiClient = {
  // GET: untuk mengambil data (seperti "minta menu")
  get: async (url, options = {}) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || 'https://api.brandku.com'}${url}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      }
    );
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Gagal ambil data: ${response.status} ${response.statusText}\n` +
          `Pesan: ${errorData.message || 'Cek koneksi atau alamat API'}`
      );
    }
    return await response.json();
  },

  // POST: untuk mengirim data (seperti "pesan makanan")
  post: async (url, body, options = {}) => {
    // Mock khusus untuk /login — validasi sederhana, tanpa server asli.
    if (url === '/login') {
      const { email, password } = body || {};
      return new Promise((resolve, reject) => {
        // Simulasi delay jaringan biar loading state kelihatan natural.
        setTimeout(() => {
          if (email === 'fathur@brandku.com' && password === '123') {
            resolve({
              success: true,
              user: {
                name: 'fathur',
                email: 'fathur@brandku.com',
                role: 'Admin',
              },
            });
          } else {
            reject(new Error('Email atau password salah — coba: fathur@brandku.com / 123'));
          }
        }, 600);
      });
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || 'https://api.brandku.com'}${url}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(body),
        ...options,
      }
    );
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Gagal kirim data: ${response.status} ${response.statusText}\n` +
          `Pesan: ${errorData.message || 'Cek koneksi atau data yang dikirim'}`
      );
    }
    return await response.json();
  },
};