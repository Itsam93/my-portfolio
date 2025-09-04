import { Code, PenTool, BookOpen, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-picture">
        <img src="/picture.jpg" alt="Portrait of Samuel Oglekwu" />
      </div>
      <div className="text">
        <h2>Hi, I'm Samuel!</h2>
        <p>
          <Typewriter
            words={[
              "I'm a passionate Front-End Developer with a keen eye for detail and a strong focus on creating clean, responsive, and user-friendly interfaces. I enjoy turning complex problems into elegant, intuitive digital experiences. Whether it's building from scratch or improving existing systems, I'm driven by a love for good design, clean code, and seamless user interaction.",
            ]}
            loop={false}
            typespeed={70}
            deleteSpeed={20}
          />
        </p>
      </div>
    </section>
  );
}

export default Hero;
