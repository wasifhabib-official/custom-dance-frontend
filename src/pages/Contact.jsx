import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import api from "../api/axios"; 
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import { Mail, ShieldCheck, Ruler, Zap, MessageCircle, Loader2, Send, Globe, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // ðŸš€ NEW: Tracks if the form was successful
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.post(`/order-actions/contact`, formData);

      if (response.data.success) {
        setIsSuccess(true); // ðŸš€ Trigger the success screen!
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      alert("Something went wrong. Please try emailing us directly or reach out on WhatsApp!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-body text-gray-900 overflow-hidden">
      <Helmet>
        <title>Contact Stacy | Expert Custom Dance Patch Support</title>
        <meta name="description" content="Message Stacy directly for expert guidance on custom dance patches. 24-hour response time guaranteed." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-rose-50/30 py-24 border-b border-rose-100/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-4xl text-rose-500 mb-4 block"
          >
            Let's Chat
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Expert <span className="text-rose-600">Guidance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you are in Houston, London, or Sydney, Stacy is here to help you choose the right stitch for your next competition season.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Info & Resources */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading tracking-tight">Direct Communication</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I personally review every inquiry. If you have a complex logo or a tight competition deadline, message me for a priority review.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Email Stacy</h4>
                      <p className="text-gray-600 font-medium break-all sm:break-normal">stacy@customdancepatches.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-5 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest">WhatsApp Support</h4>
                      <p className="text-gray-600 font-medium">+1 307 285 7086</p>
                      <span className="inline-block mt-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">FASTEST RESPONSE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap size={16} className="text-amber-500 fill-amber-500" /> Technical Quick-Links
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/backing-guide" className="p-4 bg-gray-50 rounded-2xl hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all text-center group">
                    <ShieldCheck size={20} className="text-rose-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-sm">Backing Guide</p>
                  </Link>
                  <Link to="/size-guide" className="p-4 bg-gray-50 rounded-2xl hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all text-center group">
                    <Ruler size={20} className="text-rose-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-sm">Size Guide</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 md:p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                 <div className="flex items-center gap-2 text-rose-400 font-bold uppercase text-xs tracking-widest mb-4">
                    <Globe size={16} /> Global Studio Hours
                 </div>
                 <p className="text-gray-300 leading-relaxed text-sm">
                   I am most active between <strong>9:00 AM - 6:00 PM CST</strong>. I serve dance studios globally, so expect a reply within 24 hours regardless of your time zone.
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Form OR Success Screen */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            {isSuccess ? (
              /* ðŸš€ SUCCESS SCREEN UI */
              <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center flex flex-col items-center justify-center h-full min-h-[500px]">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 font-heading">Message Sent!</h3>
                <p className="text-gray-500 mb-8 text-lg">Stacy has received your inquiry and will review it shortly. An automated confirmation has been sent to your email.</p>
                
                <div className="bg-gray-50 rounded-2xl p-6 w-full mb-8">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Need an immediate reply?</p>
                  <p className="text-gray-700 font-medium">Reach out directly on WhatsApp:</p>
                  <p className="text-xl font-bold text-green-600 mt-1">+1 307 285 7086</p>
                </div>

                <Button 
                  onClick={() => setIsSuccess(false)} 
                  variant="outline" 
                  className="w-full py-6 rounded-full border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold uppercase tracking-widest text-sm"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              /* ðŸ“ STANDARD FORM UI */
              <form onSubmit={handleSubmit} className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-xs uppercase tracking-widest font-bold text-gray-400">Full Name *</Label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 outline-none transition-all bg-gray-50/50"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address *</Label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 outline-none transition-all bg-gray-50/50"
                      placeholder="jane@studio.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-gray-400">Subject *</Label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 outline-none transition-all bg-gray-50/50"
                      placeholder="Order Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-gray-400">Message for Stacy *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/5 outline-none transition-all bg-gray-50/50 resize-none"
                      placeholder="Tell me about your studio's vision..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl shadow-rose-200/50 transition-all duration-300 py-8 rounded-full font-bold text-lg uppercase tracking-widest disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Replies are sent by a human, not a bot.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading tracking-tight">What to Include in Your Message</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Getting a quote from Custom Dance Patches is simple. When you reach out, include your studio name, the dance styles your students perform, the approximate number of patches you need, your preferred patch type (embroidered, chenille, or sequin), and your competition or recital deadline. The more detail you share upfront, the faster Stacy can prepare your free digital mockup.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading tracking-tight">What Happens After You Contact Us</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Once Stacy receives your message, she personally reviews your requirements and responds within 24 to 48 hours. You will receive a free digital mockup based on your studio logo and color palette before any payment is required. There are no setup fees, no digitizing fees, and no minimum beyond 10 pieces. We serve dance studios in the USA, UK, Canada, and Australia with free express worldwide shipping on every order.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading tracking-tight">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">How long does production take?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Standard production takes 10 to 14 business days after your mockup is approved. Rush orders are available on request.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Can I see a mockup before I pay?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Yes. Every order begins with a free digital mockup. You approve the design before production starts and before any payment is taken.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">What is the minimum order quantity?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our minimum is just 10 pieces, making us ideal for soloists, small competition groups, and studios testing a new design before ordering for the full team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Contact;
