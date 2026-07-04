import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./komponen/Header.jsx";
import Hero from "./komponen/Hero.jsx";
import Marquee from "./komponen/Marquee.jsx";
import Fitur from "./komponen/Fitur.jsx";
import Footer from "./komponen/Footer.jsx";
import featureData from "./data/features.js";

const STORAGE_KEY = "brandku-feature-likes";

const App = () => {
  // Lazy initializer: fungsi ini cuma jalan SEKALI saat komponen pertama kali render,
  // jadi baca localStorage tidak berulang tiap re-render.
  const [features, setFeatures] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedLikes = JSON.parse(saved); // { [id]: jumlahLike }
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

  // Setiap kali "features" berubah (misalnya abis diklik ❤️), simpan ulang ke localStorage.
  useEffect(() => {
    const likesMap = Object.fromEntries(
      features.map((feature) => [feature.id, feature.likes])
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likesMap));
  }, [features]);

  const handleLike = (id) => {
    console.log('handleLike dipanggil, id:', id); // tambahkan baris ini
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
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Marquee />
              <Fitur features={features} onLike={handleLike} />
            </>
          }
        />
        <Route path="/fitur" element={<Fitur features={features} onLike={handleLike} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;