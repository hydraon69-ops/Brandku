# Brandku ✦

Landing page personal branding sederhana, dibangun pakai React + Vite + Tailwind CSS. Proyek ini dibuat sebagai bagian dari tugas belajar React (props, `useState`, `useEffect`, custom hook, dan routing).

## Fitur

- 🎨 Desain custom bertema gen Z (warna berani, animasi ambient, marquee horizontal)
- 📱 Navbar responsif dengan hamburger menu di mobile
- 🧭 Routing multi-halaman: **Beranda**, **Tentang**, **Harga**
- 🔽 Dropdown mega-menu ringkas di navbar
- ❤️ Fitur "like" pada card fitur, tersimpan otomatis walau halaman di-refresh (`localStorage`)
- 🔐 Simulasi login sederhana (mock API, belum terhubung backend asli)
- 🖱️ Card fitur bisa di-scroll horizontal (drag di desktop, swipe di mobile)

## Teknologi

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Cara menjalankan

Clone repo ini, lalu:

\`\`\`bash
npm install
npm run dev
\`\`\`

Buka `http://localhost:5173` di browser.

## Struktur proyek

\`\`\`
src/
  komponen/     → komponen UI (Header, Footer, Hero, Fitur, Card, dst)
  halaman/      → halaman-halaman (Beranda, Tentang, Harga)
  data/         → data statis (dummy data fitur)
  hooks/        → custom hooks (useLogin)
  lib/          → utilitas (apiClient)
  App.jsx       → routing utama
  main.jsx      → entry point
\`\`\`

## Login demo

Fitur login masih pakai data simulasi (belum ada backend asli), bisa dicoba dengan:

- **Email:** `fathur@brandku.com`
- **Password:** `123`

## Status

Proyek pembelajaran, masih terus dikembangkan.

---

© 2026 Brandku. Dibuat untuk keperluan belajar.
