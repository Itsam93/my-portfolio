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
        <img src="/sam.png" alt="Portrait of Samuel Oglekwu" />
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
          I'm a Data Analyst and Front-End Developer passionate about transforming 
          data and ideas into meaningful, user-focused digital solutions. I combine 
          analytical thinking with a keen eye for design to build responsive, intuitive 
          interfaces and uncover insights that support better decision-making. Whether 
          I'm developing applications from the ground up, improving existing systems, or 
          translating complex data into actionable insights, I focus on writing clean code, 
          solving problems efficiently, and creating digital experiences that are both functional and impactful.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
