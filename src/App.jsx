import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { HomepagePage } from "./pages/HomepagePage";
import { PetAdoptionPage } from "./pages/PetAdoptionPage";
import { CatPage } from "./pages/CatPage";
import { DogPage } from "./pages/DogPage";
import { AboutPage } from "./pages/AboutPage";
import { InformationPage } from "./pages/InformationPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SupportUsPage } from "./pages/SupportUsPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PetDetailsPage } from "./pages/PetDetailsPage";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="main-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomepagePage />} />
          <Route path="/pet-adoption" element={<PetAdoptionPage />} />
          <Route path="/pet-adoption/cat" element={<CatPage />} />
          <Route path="/pet-adoption/dog" element={<DogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/support" element={<SupportUsPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/pet-details/:petId" element={<PetDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
