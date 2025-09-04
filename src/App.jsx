import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";

function ToggleButton({ onNext, onPrev }) {
  return (
    <div className="navigation-buttons">
      <button className="nav-btn" onClick={onPrev}>
        Previous
      </button>
      <button className="nav-btn" onClick={onNext}>
        Next
      </button>
    </div>
  );
}

function App() {
  const cards = [
    { id: 1, component: <Welcome /> },
    { id: 2, component: <Hero /> },
    { id: 3, component: <Skills /> },
    { id: 4, component: <Projects /> },
    { id: 5, component: <Testimony /> },
    { id: 6, component: <Contact /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <main className="main">
      {/* Navigation Buttons */}
      <ToggleButton onNext={handleNextCard} onPrev={handlePrevCard} />

      {/* Card with Navbar always present */}
      <div className="card-container perspective">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[currentIndex].id}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="card backface-hidden"
            style={{ position: "relative" }}
          >
            {cards[currentIndex].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
