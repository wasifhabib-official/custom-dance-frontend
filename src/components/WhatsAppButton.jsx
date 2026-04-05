import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const location = useLocation();
  const phoneNumber = "13072857086"; 
  const message = "Hi Stacy! I'm interested in custom patches for my dance studio.";
  
  // ✅ This ensures the button is ONLY visible on customer-facing pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[9999] flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] group-hover:ml-3 transition-all duration-500 font-black uppercase text-[10px] tracking-widest whitespace-nowrap">
        Chat with Stacy
      </span>
    </a>
  );
};

export default WhatsAppButton;