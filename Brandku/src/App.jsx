import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./komponen/Header.jsx";
import Footer from "./komponen/Footer.jsx";
import Beranda from "./halaman/Beranda.jsx";
import Tentang from "./halaman/Tentang.jsx";
import Harga from "./halaman/Harga.jsx";
import featureData from "./data/features.js";

const STORAGE_KEY = "brandku-feature-likes";

const App = () => {
  const [features, setFeatures] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedLikes = JSON.parse(saved);
        return featureData.map((feature) => ({
          ...feature,
          likes: savedLikes[feature.id] ?? feature.likes,
        }));
      }
    } catch (err) {
      console.error("Gagal baca like dari localStorage:", err);
    }
    return featureData;
  });

  useEffect(() => {
    const likesMap = Object.fromEntries(
      features.map((feature) => [feature.id, feature.likes])
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likesMap));
  }, [features]);

  const handleLike = (id) => {
    setFeatures((prev) =>
      prev.map((feature) =>
        feature.id === id ? { ...feature, likes: feature.likes + 1 } : feature
      )
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/Beranda" replace />} />
        <Route path="/Beranda" element={<Beranda features={features} onLike={handleLike} />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/Harga" element={<Harga />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;