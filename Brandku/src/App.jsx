import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./komponen/Header.jsx";
import Hero from "./komponen/Hero.jsx";
import Marquee from "./komponen/Marquee.jsx";
import Fitur from "./komponen/Fitur.jsx";
import Footer from "./komponen/Footer.jsx";
import featureData from "./data/features.js";

const App = () => {
  const [features, setFeatures] = useState(featureData);

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