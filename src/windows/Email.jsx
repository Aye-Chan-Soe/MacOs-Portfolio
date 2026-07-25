import emailjs from "@emailjs/browser";

import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import { useState } from "react";

const Email = () => {
  const [form, setForm] = useState({ subject: "", reply_to: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const isSending = status.type === "sending";

  const handleChange = (e) => {
    setForm((currentForm) => ({ ...currentForm, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setStatus({ type: "sending", message: "Sending..." });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus({ type: "success", message: "Email sent successfully!" });
      setForm({ subject: "", reply_to: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send email. Please try again later.",
      });
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="email" />
        <h2>New Messages</h2>
      </div>

      <div className="bg-white">
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <p>
            To: <strong>ayechansoe.dev@gmail.com</strong>
          </p>
          <input
            name="reply_to"
            type="email"
            value={form.reply_to}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded border p-2"
            disabled={isSending}
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full rounded border p-2"
            disabled={isSending}
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Description"
            required
            rows="6"
            className="w-full rounded border p-2"
            disabled={isSending}
          />
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
          {status.message && (
            <p role="status" aria-live="polite" aria-atomic="true">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

const EmailWindow = WindowWrapper(Email, "email");

export default EmailWindow;
