import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./layouts/Layout";
import AdminLayout from "./layouts/AdminLayout";

import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import ContactPage from "./pages/ContactPage";
import CustomOrder from "./pages/CustomOrder";
import Gallery from "./pages/Gallery";
import Hero from "./pages/Hero";
import HeroImage from "./pages/HeroImage";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory";
import PatchTypes from "./pages/PatchTypes";
import Pricing from "./pages/Pricing";
import TrackOrder from "./pages/TrackOrder";
import WelcomeMessage from "./pages/WelcomeMessage";
import UploadTest from "./pages/UploadTest";
import FormIsolationTest from "./pages/FormIsolationTest";
import Success from "./pages/Success";
import PaymentSuccess from "./pages/PaymentSuccess";
import ApproveAction from "./pages/ApproveAction";
import RequestChanges from "./pages/RequestChanges";
import MockupConfirmed from "./pages/MockupConfirmed";
import MockupApproved from "./pages/MockupApproved";
import MockupRevision from "./pages/MockupRevision";
import SizeGuide from "./pages/SizeGuide";
import BackingGuide from "./pages/BackingGuide";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import EmbroideredPatches from "./pages/patch-types/EmbroideredPatches";
import ChenillePatches from "./pages/patch-types/ChenillePatches";
import WovenPatches from "./pages/patch-types/WovenPatches";
import SequinPatches from "./pages/patch-types/SequinPatches";
import GlossyStickerPatches from "./pages/patch-types/GlossyStickerPatches";
import VinylStickerPatches from "./pages/patch-types/VinylStickerPatches";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminOrderDetails from "./pages/AdminOrderDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/contact-page" element={<Layout><ContactPage /></Layout>} />
        <Route path="/custom-order" element={<Layout><CustomOrder /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/hero" element={<Layout><Hero /></Layout>} />
        <Route path="/hero-image" element={<Layout><HeroImage /></Layout>} />
        <Route path="/our-story" element={<Layout><OurStory /></Layout>} />
        <Route path="/patch-types" element={<Layout><PatchTypes /></Layout>} />
        <Route path="/patch-types/embroidered-patches" element={<Layout><EmbroideredPatches /></Layout>} />
        <Route path="/patch-types/chenille-patches" element={<Layout><ChenillePatches /></Layout>} />
        <Route path="/patch-types/woven-patches" element={<Layout><WovenPatches /></Layout>} />
        <Route path="/patch-types/sequin-patches" element={<Layout><SequinPatches /></Layout>} />
        <Route path="/patch-types/glossy-sticker-patches" element={<Layout><GlossyStickerPatches /></Layout>} />
        <Route path="/patch-types/vinyl-sticker-patches" element={<Layout><VinylStickerPatches /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/size-guide" element={<Layout><SizeGuide /></Layout>} />
        <Route path="/backing-guide" element={<Layout><BackingGuide /></Layout>} />
        <Route path="/success" element={<Layout><Success /></Layout>} />
        <Route path="/payment-success" element={<Layout><PaymentSuccess /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/refund-policy" element={<Layout><RefundPolicy /></Layout>} />
        <Route path="/approve-action/:token" element={<Layout><ApproveAction /></Layout>} />
        <Route path="/request-changes/:token" element={<Layout><RequestChanges /></Layout>} />
        <Route path="/mockup-confirmed" element={<Layout><MockupConfirmed /></Layout>} />
        <Route path="/mockup-approved/:orderId" element={<Layout><MockupApproved /></Layout>} />
        <Route path="/mockup-revision/:orderId" element={<Layout><MockupRevision /></Layout>} />
        <Route path="/track-order" element={<Layout><TrackOrder /></Layout>} />
        <Route path="/welcome-message" element={<Layout><WelcomeMessage /></Layout>} />
        <Route path="/upload-test" element={<UploadTest />} />
        <Route path="/form-test" element={<FormIsolationTest />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout><AdminDashboard /></AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/order/:id"
          element={
            <PrivateRoute>
              <AdminLayout><AdminOrderDetails /></AdminLayout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
      <WhatsAppButton />
    </HelmetProvider>
  );
}

export default App;