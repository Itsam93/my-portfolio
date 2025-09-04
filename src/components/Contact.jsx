import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_1qfpg8k",
        "template_mhytnaa",
        form.current,
        "zG1URnzhN5keLNTJD"
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="group">
        {/* Left Side */}
        <div className="text">
          <p>
            To send me a message, kindly fill out the form with the required
            details and I’ll get back to you swiftly. Thank you!
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* CV Download */}
          <a href="/SAM CV.pdf" download="SAM_CV.pdf" className="btn btn2">
            <Download size={18} /> Download CV
          </a>
        </div>

        {/* Right Side: Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && <p className="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
