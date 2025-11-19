import { motion } from "framer-motion";
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
    <div className="hero-section flex flex-col items-center justify-center text-center">
      
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-bold"
      >
        WELCOME TO MY PORTFOLIO
      </motion.h1>

      {/* Social Icons */}
      <motion.div
        className="hero-social-icons flex gap-6 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/Itsam93"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaGithub size={24} />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/samuel-oglekwu/"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size={24} />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:samogleks@gmail.com"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope size={24} />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Welcome;
