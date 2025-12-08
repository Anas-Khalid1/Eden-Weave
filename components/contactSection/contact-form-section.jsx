"use client";

import { useRef, useState } from "react";
import { MessageCircle, Mail, Navigation } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullName = formRef.current.fullName.value;
    const email = formRef.current.email.value;
    const subject = formRef.current.subject.value;
    const message = formRef.current.message.value;

    try {
      // Send to admin - Template 1
      await emailjs.send(
        "service_kl3dj3k",
        "template_1r4o9v4", // Your Template 1 ID
        {
          form_type: "Contact Form",
          user_name: fullName,
          user_email: email,
          subject: subject,
          message: message,
          subject: "New Contact Form Submission",
          reply_message:
            "Thank you for reaching out to Eden Weave Foundation! We have received your message and appreciate you taking the time to contact us.",
          reply_subject: "Thank you for contacting Eden Weave Foundation",
        },
        "DEqOCZDMlqO085Dky"
      );

      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Contact Info Section - Dark Background */}
      <section className="bg-[#1a1a2e] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Group */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">WhatsApp Group</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Join our community and stay connected with updates, events, and more.
            </p>
            <a
              href="https://chat.whatsapp.com/DJ8GWVkVarxCb1duuqtTuM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 text-sm hover:underline inline-flex items-center gap-2"
            >
              Join Group
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Email</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              A wonderful serenity has taken possession of my entire soul, like
              these.
            </p>
            <a
              href="mailto:edenweavefoundation@gmail.com"
              className="text-amber-500 text-sm hover:underline"
            >
              edenweavefoundation@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Navigation className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">Location</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              71 Cardno Avenue , Glebe Farm, Milton Keynes MK17 7DY{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Light Background */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Leave us your Info
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            and we will get back to you.
          </p>

          {success && (
            <div className="mb-6 rounded-lg bg-green-100 px-4 py-3 text-green-700 text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name*"
                required
                className="w-full border-b border-gray-300 py-3 px-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email*"
                required
                className="w-full border-b border-gray-300 py-3 px-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <input
                name="phone"
                type="number"
                placeholder="Phone Number*"
                required
                className="w-full border-b border-gray-300 py-3 px-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message*"
                rows={4}
                required
                className="w-full border-b border-gray-300 py-3 px-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 hover:cursor-pointer text-white font-medium py-4 px-6 text-sm tracking-wider uppercase transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
