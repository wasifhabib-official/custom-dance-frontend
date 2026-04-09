import React from "react";
import { Helmet } from "react-helmet-async";
import { ShieldAlert } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#faf7f5] py-20 px-4 font-body text-slate-700">
      <Helmet>
        <title>Refund & Return Policy | Custom Dance Patches</title>
        <meta
          name="description"
          content="Review the refund, replacement, cancellation, and defect handling policy for Custom Dance Patches custom orders."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
          <ShieldAlert className="text-rose-500 w-8 h-8" />
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            Refund Policy
          </h1>
        </div>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <p>
            At Custom Dance Patches, we pride ourselves on delivering premium,
            high-quality products tailored specifically to your studio's brand. Because
            our products are 100% custom-made to order, our return policy differs from
            standard retail stores.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            1. Custom Goods Exemption
          </h2>
          <p>
            Due to the highly customized nature of our products (involving your
            specific logos, colors, and sizing), <strong>we do not accept returns,
            exchanges, or offer refunds once production has begun.</strong> All sales
            are final upon approval of your digital mockup and payment of your invoice.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            2. Digital Mockup Approval
          </h2>
          <p>
            Before any item goes into physical production, we provide a digital mockup
            for your review. It is your responsibility to thoroughly check the spelling,
            colors, sizing, and design details. Once you approve the mockup and pay the
            invoice, Custom Dance Patches is not liable for errors present in the
            approved mockup.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            3. Order Cancellations
          </h2>
          <p>
            If you need to cancel your order, you must do so <strong>before</strong>{" "}
            mockup approval and payment. If you request a cancellation after payment but
            before physical production has started, we may issue a partial refund minus
            a 20% digitizing and setup fee. Once the machines start running, no
            cancellations can be accepted.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            4. Defective or Incorrect Items
          </h2>
          <p>
            We stand behind our quality. If your order arrives defective, damaged, or
            significantly different from your approved digital mockup, please contact us
            within <strong>7 days of delivery</strong> at{" "}
            <a
              href="mailto:stacy@customdancepatches.com"
              className="text-rose-500 font-bold hover:underline"
            >
              stacy@customdancepatches.com
            </a>
            .
          </p>
          <p>
            You must provide clear photos of the defect. If the error was made on our
            end, we will gladly remake and replace the defective patches at no cost to
            you. We do not issue cash refunds for defective items; we issue
            replacements.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-8 mb-2">
            5. Color Matching
          </h2>
          <p>
            While we use premium threads and strive for perfection, please note that
            thread colors may vary slightly from how they appear on a backlit computer
            or phone screen. Minor color variances do not qualify as a defect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
