import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      img: "/todo-list-preview.JPG",
      title: "To-Do List Website",
      desc: "A responsive task management app using React, deployed on Vercel.",
      demo: "https://my-todo-ochre-kappa.vercel.app/",
      code: "https://github.com/Itsam93/my-todo",
    },
    {
      img: "/bible-quiz-preview.JPG",
      title: "Bible Quiz App",
      desc: "A Bible Quiz app using React and TailwindCSS. Deployed on Vercel.",
      demo: "https://bible-quiz-app-tawny.vercel.app/",
      code: "https://github.com/Itsam93/bible-quiz-app",
    },
    {
      img: "/school-app-preview.JPG",
      title: "School Management System",
      desc: "A modern school management system built with React, Node, and MongoDB.",
      demo: "https://school-app-snowy.vercel.app/",
      code: "https://github.com/Itsam93/school-app",
    },
    {
      img: "/turning-scars-to-stars-preview.JPG",
      title: "Turning Scars to Stars",
      desc: "A Non-Profit Organization Web Application built with React.",
      demo: "https://new-tsts.vercel.app/",
      code: "https://github.com/Itsam93/NEW_TSTS/",
    },
    {
      img: "/httn-preview.JPG",
      title: "HTTN",
      desc: "One of my first web app i tried to redesign the UI using HTML and CSS.",
      demo: "https://httn.vercel.app/",
      code: "https://github.com/Itsam93/httn",
    },
    {
      img: "/frost-preview.JPG",
      title: "Frost",
      desc: "My Second web app i tried to redesign the UI using HTML and CSS.",
      demo: "https://frost-umber.vercel.app/",
      code: "https://github.com/Itsam93/Frost",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="text">
        Here are some of the projects I've worked on, showcasing my skills in
        front-end and back-end web development. Each project highlights
        different aspects of my expertise, from responsive design to API
        integration and deployment.
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="buttons">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
