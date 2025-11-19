import { motion } from "framer-motion";

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
      
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold"
      >
        My Skills
      </motion.h2>

      {/* Description (replacing Typewriter) */}
      <motion.p
        className="text max-w-2xl mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm skilled in front-end and back-end web development, with hands-on
        experience in building modern, responsive applications. I focus on
        writing clean, efficient code, creating seamless user experiences,
        and deploying projects to production.
      </motion.p>

      {/* Skills Grid */}
      <div className="cells mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.label}
            className="cell"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
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
