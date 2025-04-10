import { useState } from 'react'
import './App.css'
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


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomepagePage />} />
        <Route path="/pet-adoption" element={<PetAdoptionPage />} />
        <Route path="/pet-adoption/cat" element={<CatPage />} />
        <Route path="/pet-adoption/dog" element={<DogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/support" element={<SupportUsPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
