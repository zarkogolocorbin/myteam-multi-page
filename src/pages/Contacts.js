import React, { useEffect } from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import Helmet from "react-helmet";

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

const Contacts = () => {
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
        <title>My Team | Contact Page</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Contacts;
