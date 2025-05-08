import React, { useRef, useState } from "react";
import { isEmail, isEmpty } from "../util/validation";
import emailjs from "@emailjs/browser";

const FORM_DEFAULT_VALUE = { name: "", email: "", message: "" };

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState(FORM_DEFAULT_VALUE);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      if (isEmpty(form.name) || isEmpty(form.email) || isEmpty(form.message)) {
        throw new Error("Please complete all fields.");
      }

      if (!isEmail(form.email)) {
        throw new Error("Please use a valid email address.");
      }

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm(FORM_DEFAULT_VALUE);

      setMessage("Thank you for your message! I'll be in touch soon.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  // TODO: useEffect to scroll if message

  return (
    <div className="xl:col-span-5">
      <div className="flex-center card-border rounded-xl p-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7"
        >
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              data-testid="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What’s your good name?"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What’s your email address?"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              data-testid="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows="5"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            <div className="cta-button group">
              <div className="bg-circle" />
              <p className="text">{loading ? "Sending..." : "Send Message"}</p>
              <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
              </div>
            </div>
          </button>

          {message && <p className="text-white-50 text-xl italic">{message}</p>}
        </form>
      </div>
    </div>
  );
}
