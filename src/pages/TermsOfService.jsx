import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#faf7f5] py-20 px-4 font-body text-slate-700">
      <Helmet>
        <title>Terms of Service | Custom Dance Patches</title>
        <meta
          name="description"
          content="Read the terms of service for Custom Dance Patches, including artwork approvals, production timelines, payments, and order responsibilities."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-200">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-b border-slate-100 pb-6">
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing our website and placing an order with Custom Dance Patches,
            you agree to be bound by these Terms of Service. If you do not agree,
            please do not use our services.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            2. Artwork Ownership and Copyright
          </h2>
          <p>
            By submitting artwork, logos, or designs to us, you warrant and represent
            that you are the sole, legal owner or licensee of all rights, including
            copyright, to that artwork. You agree to indemnify and hold harmless Custom
            Dance Patches against any legal action, claims, or damages resulting from
            the unauthorized use of copyrighted materials.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            3. Quotes and Payment
          </h2>
          <p>
            All quotes provided are valid for 30 days. Payments are securely processed
            via Stripe. Production will not commence until invoices are paid in full.
            We reserve the right to adjust pricing if the final approved artwork differs
            significantly from the initial concept provided for the quote.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            4. Production and Shipping Timelines
          </h2>
          <p>
            While we offer express fulfillment, all delivery dates provided are
            estimates, not guarantees. Custom manufacturing is subject to unforeseen
            delays. Custom Dance Patches is not liable for missed event deadlines due
            to courier delays, customs holds, or acts of God.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            5. Right to Refuse Service
          </h2>
          <p>
            We reserve the right to refuse service to anyone for any reason at any
            time, including orders containing offensive, hateful, or explicit material.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
