import { motion } from "framer-motion";
import { Code, PenTool, BookOpen, Mail } from "lucide-react";

function Hero() {
  return (
    <section className="hero flex items-center gap-10">
      
      {/* Profile Image Animation */}
      <motion.div
        className="hero-picture"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/picture.jpg" alt="Portrait of Samuel Oglekwu" />
      </motion.div>

      <div className="text">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold"
        >
          Hi, I'm Samuel!
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg leading-relaxed"
        >
          I'm a passionate Front-End Developer with a keen eye for detail and a strong 
          focus on creating clean, responsive, and user-friendly interfaces. I enjoy 
          turning complex problems into elegant, intuitive digital experiences. Whether 
          it's building from scratch or improving existing systems, I'm driven by a 
          love for good design, clean code, and seamless user interaction.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
