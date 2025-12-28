import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

// Pages
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import CuratorPage from "./pages/CuratorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import ReviewsPage from "./pages/ReviewsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import FAQPage from "./pages/FAQPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";

// Layout
import MainLayout from "./layouts/MainLayout";

// Protected Route
const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Routes>
      {/* Public pages with main layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="curator" element={<CuratorPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Auth pages (no main layout) */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected pages */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
