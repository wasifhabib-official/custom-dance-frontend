import React from "react";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import { useToast } from "../components/ui/use-toast";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 💌",
      description: "I'll get back to you as soon as I put down the scissors (usually 24-48 hours).",
      duration: 8000,
    });
    e.target.reset();
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side info */}
          <div>
            <span className="font-script text-3xl text-rose-500 mb-4 block">Let's Chat</span>
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Questions? Ideas? Just want to say hi?
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I love hearing from fellow dance lovers. Whether you're unsure about a design, need help with sizing, or just want to brainstorm, I'm here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email Me</p>
                  <p className="text-gray-600">stacy@customdancepatches.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Response Time</p>
                  <p className="text-gray-600">Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="bg-gray-50 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-white"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  required
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-white"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button
                type="submit"
                aria-label="Send your message"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-lg py-4 font-bold shadow-md"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;