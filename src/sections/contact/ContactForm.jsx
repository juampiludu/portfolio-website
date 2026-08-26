import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { isEmail, isEmpty } from "../../utils/validation";

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

      formRef.current.reset();
      setFieldErrors(DEFAULT_FIELD_ERRORS_OBJ);
      setGlobalMessage({
        tone: "ok",
        text: "Thank you for your message. I'll be in touch soon.",
      });
    } catch (error) {
      console.error(error);
      setGlobalMessage({
        tone: "error",
        text: "Something went wrong sending that. Email me directly instead.",
      });
    }

    setLoading(false);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className={`field ${fieldErrors.name ? "field--error" : ""}`}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          data-testid="name"
          ref={nameRef}
          onBlur={() => handleBlur("name")}
          placeholder="Who's writing?"
          required
        />
        {fieldErrors.name && (
          <span className="field__error">Add your name</span>
        )}
      </div>

      <div className={`field ${fieldErrors.email ? "field--error" : ""}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          data-testid="email"
          ref={emailRef}
          onBlur={() => handleBlur("email")}
          placeholder="Where should the reply go?"
          required
        />
        {fieldErrors.email && (
          <span className="field__error">
            That address doesn't look complete
          </span>
        )}
      </div>

      <div className={`field ${fieldErrors.message ? "field--error" : ""}`}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          data-testid="message"
          ref={messageRef}
          onBlur={() => handleBlur("message")}
          placeholder="What are you building?"
          rows="5"
          required
        />
        {fieldErrors.message && (
          <span className="field__error">Add a message</span>
        )}
      </div>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </button>

      {globalMessage && (
        <p
          role="status"
          className="mono"
          style={
            globalMessage.tone === "error"
              ? { color: "var(--color-accent)" }
              : undefined
          }
        >
          {globalMessage.text}
        </p>
      )}
    </form>
  );
}
