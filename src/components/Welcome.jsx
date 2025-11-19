import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Welcome() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">WELCOME TO MY PORTFOLIO</h1>

      {/* Social Links */}
      <div className="hero-social-icons">
        <a
          href="https://github.com/Itsam93"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-oglekwu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:samogleks@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </div>
    </div>
  );
}

export default Welcome;
