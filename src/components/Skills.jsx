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
    <section className="skills-section fade-section">
      <h2 className="skills-title slide-up">My Skills</h2>

      <p className="text fade-in-delayed">
        I'm skilled in front-end and back-end web development, with hands-on
        experience in building modern, responsive applications. I focus on
        writing clean, efficient code, creating seamless user experiences, and
        deploying projects to production.
      </p>

      <div className="cells">
        {skills.map((skill, index) => (
          <div
            key={skill.label}
            className="cell skill-animate"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={skill.img} alt={`${skill.label} logo`} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

