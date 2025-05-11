import React, { useRef, useState } from "react";
import { isEmail, isEmpty } from "../util/validation";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

const DEFAULT_FIELD_ERRORS_OBJ = { name: "", email: "", message: "" };

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState(DEFAULT_FIELD_ERRORS_OBJ);
  const [globalMessage, setGlobalMessage] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function handleBlur(fieldName) {
    let hasError = false;

    if (fieldName === "name") {
      hasError = isEmpty(nameRef.current.value);
    } else if (fieldName === "email") {
      hasError =
        isEmpty(emailRef.current.value) || !isEmail(emailRef.current.value);
    } else if (fieldName === "message") {
      hasError = isEmpty(messageRef.current.value);
    }

    setFieldErrors((prev) => ({
      ...prev,
      [fieldName]: hasError,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const nameError = isEmpty(nameRef.current.value);
    const emailError =
      isEmpty(emailRef.current.value) || !isEmail(emailRef.current.value);
    const messageError = isEmpty(messageRef.current.value);

    const hasError = nameError || emailError || messageError;

    setFieldErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setGlobalMessage("✅ Thank you for your message! I'll be in touch soon.");
    } catch (error) {
      console.error(error);
      setGlobalMessage("❌ Oops! Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="xl:col-span-5">
      <div className="flex-center card-border rounded-xl p-10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7"
        >
          <div className={`form-input ${fieldErrors.name ? "error" : ""}`}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              data-testid="name"
              ref={nameRef}
              onBlur={() => handleBlur("name")}
              placeholder="What’s your good name?"
              required
            />
            {fieldErrors.name && <span>Please input your name</span>}
          </div>

          <div className={`form-input ${fieldErrors.email ? "error" : ""}`}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email"
              ref={emailRef}
              onBlur={() => handleBlur("email")}
              placeholder="What’s your email address?"
              required
            />
            {fieldErrors.email && (
              <span>Please input a valid email address</span>
            )}
          </div>

          <div className={`form-input ${fieldErrors.message ? "error" : ""}`}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              data-testid="message"
              ref={messageRef}
              onBlur={() => handleBlur("message")}
              placeholder="How can I help you?"
              rows="5"
              required
            />
            {fieldErrors.message && <span>Please input a message</span>}
          </div>

          {globalMessage && (
            <p className="text-center text-lg font-semibold transition-opacity duration-300 opacity-100">
              {globalMessage}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            text={loading ? "Sending..." : "Send Message"}
            src={"/images/arrow-right.svg"}
          />
        </form>
      </div>
    </div>
  );
}
