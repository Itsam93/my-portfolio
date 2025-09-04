import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Skills() {
  const skills = [
    { img: "/html-logo.webp", label: "HTML" },
    { img: "/css-logo.webp", label: "CSS" },
    { img: "/javascript-logo.webp", label: "JavaScript" },
    { img: "/react-logo.webp", label: "React" },
    { img: "/node-logo.png", label: "Node.js" },
    { img: "/mongodb-logo.png", label: "MongoDB" },
    { img: "/github-logo.png", label: "GitHub" },
    { img: "/vercel-logo.jpg", label: "Vercel" },
  ];

  return (
    <section className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <Typewriter
        className="text"
        words={[
          "I'm skilled in front-end and back-end web development, with hands-on experience in building modern, responsive applications. I focus on writing clean, efficient code, creating seamless user experiences, and deploying projects to production.",
        ]}
        loop={false}
        typespeed={40}
        deleteSpeed={20}
      />

      <div className="cells">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.label}
            className="cell"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            viewport={{ once: true }}
          >
            <img src={skill.img} alt={`${skill.label} logo`} />
            <span>{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
