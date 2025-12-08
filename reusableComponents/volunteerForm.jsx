"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

export function VolunteerModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      setSuccess(false);
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullName = formRef.current.fullName.value;
    const email = formRef.current.email.value;
    const phone = formRef.current.phone.value;
    const availability = formRef.current.availability.value;
    const areasOfInterest = formRef.current.areasOfInterest.value;
    const skills = formRef.current.skills.value;
    const motivation = formRef.current.motivation.value;

    try {
      // Send to admin - Template 1
      await emailjs.send(
        "service_kl3dj3k",
        "template_1r4o9v4",
        {
          form_type: "Volunteer Application",
          user_name: fullName,
          user_email: email,
          phone: phone,
          availability: availability,
          areas_of_interest: areasOfInterest,
          skills: skills || "Not provided",
          motivation: motivation || "Not provided",
          subject: "New Volunteer Submission Received",
          reply_subject: "Thank you for your volunteer application",
          reply_message:
            "Thank you for submitting your volunteer application! We're excited that you want to join the Eden Weave Foundation community and make a difference.",
        },
        "DEqOCZDMlqO085Dky"
      );

      // Send confirmation to user - Template 2

      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.log("EmailJS Error:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-100 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`absolute inset-0 bg-foreground/20 backdrop-blur-xs transition-all duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative w-full max-w-lg max-h-[98%] bg-white p-8 shadow-2xl transition-all duration-300 overflow-auto ${
          isAnimating
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 hover:cursor-pointer top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          ✕
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-amber-600">
            Become a Volunteer
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join our community and make a difference
          </p>
        </div>

        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Adam Smith"
              required
              className="w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-amber-600/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="adam@example.com"
              required
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">Phone</label>
            <input
              name="phone"
              type="tel"
              placeholder="+44 7911 123456"
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Availability
            </label>
            <select
              name="availability"
              className="w-full rounded-lg border px-4 py-2.5"
              required
            >
              <option value="">Select availability</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Evenings">Evenings</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Areas of Interest
            </label>
            <select
              name="areasOfInterest"
              className="w-full rounded-lg border px-4 py-2.5"
              required
            >
              <option value="">Select an area</option>
              <option value="Event Support">Event Support</option>
              <option value="Fund Raising">Fund Raising</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Administrative Tasks">Administrative Tasks</option>
              <option value="Friday Prayers Hall setup- Jummah">Friday Prayers Hall setup- Jummah</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Skills or Experience (Optional)
            </label>
            <textarea
              name="skills"
              rows={3}
              placeholder="Tell us about your skills or experience..."
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Why do you want to volunteer? (Optional)
            </label>
            <textarea
              name="motivation"
              rows={3}
              placeholder="Tell us about your motivation..."
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              I agree to be contacted regarding volunteer opportunities
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          {success && (
            <p className="mb-4 rounded-lg bg-green-100 px-4 py-2 text-green-700">
              Thank you! Your application has been submitted.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-400 hover:cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
