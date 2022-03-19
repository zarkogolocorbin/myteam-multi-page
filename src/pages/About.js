import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Clients from "../Components/Clients";
import Footer from "../Components/Footer";
import HeroAbout from "../Components/Hero/AboutPage";
import Navbar from "../Components/Navbar";
import Start from "../Components/Start";
import Tim from "../Components/Tim";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const animationsVariants = {
  in: {
    y: 0,
    opacity: 1,
  },

  out: {
    y: -5,
    opacity: 0,
  },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={animationsVariants}
      initial="out"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>My Team | About Page</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Navbar />
      <HeroAbout />
      <Tim />
      <Clients />
      <Start />
      <Footer />
    </motion.div>
  );
};

export default About;
