import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./components/Welcome";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";

function ToggleButton({ onNext, onPrev, currentIndex, lastIndex }) {
  return (
    <div
      className="navigation-buttons"
      style={{
      position: "fixed",
      bottom: "40px",
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      zIndex: 9999,
      pointerEvents: "auto"
      }}
    >
      {/* PREVIOUS BUTTON */}
      {currentIndex > 0 && (
        <motion.button
          onClick={onPrev}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 22px",
            background: "#c91414ff",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
            color: "rgba(255, 255, 255, 1)",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: 800,
            transition: "0.3s ease",
          }}
        >
          Previous
        </motion.button>
      )}

      {/* NEXT BUTTON */}
      {currentIndex < lastIndex && (
        <motion.button
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 22px",
            background: "#c91414ff",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
            color: " rgba(253, 250, 250, 1)",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: 800,
            transition: "0.3s ease",
          }}
        >
          Next
        </motion.button>
      )}
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
  const lastIndex = cards.length - 1;

  const handleNextCard = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, lastIndex));
  };

  const handlePrevCard = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="main">
      {/* Navigation Buttons */}
      <ToggleButton
        onNext={handleNextCard}
        onPrev={handlePrevCard}
        currentIndex={currentIndex}
        lastIndex={lastIndex}
      />

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
