import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Help from './pages/Help';
import HelpArticle from './pages/HelpArticle';
import Features from './pages/Features';
import PricingPage from './pages/PricingPage';
import FaqPage from './pages/FaqPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="help" element={<Help />} />
          <Route path="help/:id" element={<HelpArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
