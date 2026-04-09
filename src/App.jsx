import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./layouts/Layout";
import AdminLayout from "./layouts/AdminLayout";

import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import SnapRouteWrapper from "./components/SnapRouteWrapper";

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
  const isSnap =
    typeof navigator !== "undefined" &&
    navigator.userAgent === "ReactSnap";

  return (
    <HelmetProvider>
      {!isSnap && <ScrollToTop />}

      <Routes>
        <Route
          path="/"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Home />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <SnapRouteWrapper>
            <Layout>
              <About />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Blog />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <SnapRouteWrapper>
            <Layout>
              <BlogPost />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Contact />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/contact-page"
          element={
            <SnapRouteWrapper>
            <Layout>
              <ContactPage />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/custom-order"
          element={
            <SnapRouteWrapper>
            <Layout>
              <CustomOrder />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Gallery />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/hero"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Hero />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/hero-image"
          element={
            <SnapRouteWrapper>
            <Layout>
              <HeroImage />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/our-story"
          element={
            <SnapRouteWrapper>
            <Layout>
              <OurStory />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types"
          element={
            <SnapRouteWrapper>
            <Layout>
              <PatchTypes />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types/embroidered-patches"
          element={
            <SnapRouteWrapper>
            <Layout>
              <EmbroideredPatches />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types/chenille-patches"
          element={
            <SnapRouteWrapper>
            <Layout>
              <ChenillePatches />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types/woven-patches"
          element={
            <SnapRouteWrapper>
            <Layout>
              <WovenPatches />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types/sequin-patches"
          element={
            <SnapRouteWrapper>
            <Layout>
              <SequinPatches />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types/glossy-sticker-patches"
          element={
            <SnapRouteWrapper>
            <Layout>
              <GlossyStickerPatches />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/patch-types/vinyl-sticker-patches"
          element={
            <SnapRouteWrapper>
            <Layout>
              <VinylStickerPatches />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/pricing"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Pricing />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/size-guide"
          element={
            <SnapRouteWrapper>
            <Layout>
              <SizeGuide />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/backing-guide"
          element={
            <SnapRouteWrapper>
            <Layout>
              <BackingGuide />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/success"
          element={
            <SnapRouteWrapper>
            <Layout>
              <Success />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/payment-success"
          element={
            <SnapRouteWrapper>
            <Layout>
              <PaymentSuccess />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/terms"
          element={
            <SnapRouteWrapper>
            <Layout>
              <TermsOfService />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/privacy"
          element={
            <SnapRouteWrapper>
            <Layout>
              <PrivacyPolicy />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <SnapRouteWrapper>
            <Layout>
              <RefundPolicy />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/approve-action/:token"
          element={
            <SnapRouteWrapper>
            <Layout>
              <ApproveAction />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/request-changes/:token"
          element={
            <SnapRouteWrapper>
            <Layout>
              <RequestChanges />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/mockup-confirmed"
          element={
            <SnapRouteWrapper>
            <Layout>
              <MockupConfirmed />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/mockup-approved/:orderId"
          element={
            <SnapRouteWrapper>
            <Layout>
              <MockupApproved />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/mockup-revision/:orderId"
          element={
            <SnapRouteWrapper>
            <Layout>
              <MockupRevision />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/track-order"
          element={
            <SnapRouteWrapper>
            <Layout>
              <TrackOrder />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/welcome-message"
          element={
            <SnapRouteWrapper>
            <Layout>
              <WelcomeMessage />
            </Layout>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/upload-test"
          element={
            <SnapRouteWrapper>
              <UploadTest />
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/form-test"
          element={
            <SnapRouteWrapper>
              <FormIsolationTest />
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/admin/login"
          element={
            <SnapRouteWrapper>
              <AdminLogin />
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <SnapRouteWrapper>
              <PrivateRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </PrivateRoute>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="/admin/order/:id"
          element={
            <SnapRouteWrapper>
              <PrivateRoute>
                <AdminLayout>
                  <AdminOrderDetails />
                </AdminLayout>
              </PrivateRoute>
            </SnapRouteWrapper>
          }
        />
        <Route
          path="*"
          element={
            <SnapRouteWrapper>
            <Layout>
              <NotFound />
            </Layout>
            </SnapRouteWrapper>
          }
        />
      </Routes>

      {!isSnap && <WhatsAppButton />}
    </HelmetProvider>
  );
}

export default App;
