"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!formRef.current) return;

    // Auto-fill time
    const timeInput =
      formRef.current.querySelector<HTMLInputElement>("input[name='time']");
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs
      .sendForm(
        "service_ole3gon", // replace with your EmailJS Service ID
        "template_m3fmpig", // replace with your EmailJS Template ID
        formRef.current,
        "vMfAGgnilrQ0IU8R6" // replace with your EmailJS Public Key
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-evenly mb-20 gap-4"
    >
      <h2 className="text-center font-bold text-6xl bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] text-transparent bg-clip-text">
        Get in Touch
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl mx-auto mt-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-md ring-2 ring-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white text-secondary-light"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-md ring-2 ring-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white text-secondary-light"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="p-3 rounded-md ring-2 ring-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white text-secondary-light"
        />
        {/* Hidden input for time */}
        <input type="hidden" name="time" />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded-md ring-2 ring-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white text-secondary-light"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary-light text-white py-3 rounded-md font-semibold hover:bg-primary-default "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-500 mt-2 dark:text-green-400">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 mt-2 dark:text-red-400">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
