import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#faf7f5] py-20 px-4 font-body text-slate-700">
      <Helmet>
        <title>Privacy Policy | Custom Dance Patches</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-200">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-b border-slate-100 pb-6">Privacy Policy</h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>Custom Dance Patches ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products. This includes your name, email address, phone number, physical address (for shipping), and uploaded artwork.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">2. Payment Processing</h2>
          <p>All financial transactions are securely handled through our third-party payment processor, Stripe. We do not directly collect, store, or process your full credit card numbers or bank details. Please refer to Stripe's Privacy Policy for information on how they handle your data.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">3. How We Use Your Information</h2>
          <p>We use your information exclusively to fulfill your custom order, communicate with you regarding your design, ship your products, and provide customer support. We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">4. Data Retention</h2>
          <p>We will only keep your personal information and artwork files for as long as it is necessary for the purposes set out in this privacy policy, typically to allow for easy re-ordering of your studio's patches in the future.</p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">5. Contact Us</h2>
          <p>If you have questions or comments about this notice, you may email us at <a href="mailto:stacy@customdancepatches.com" className="text-rose-500 font-bold hover:underline">stacy@customdancepatches.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;