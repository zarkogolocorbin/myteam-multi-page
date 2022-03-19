import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import HeroHome from "../Components/Hero/HomePage";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import Start from "../Components/Start";
import Testimonials from "../Components/Testimonials";
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

const Home = () => {
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
        <title>My Team | Home Page</title>
        <meta name="description" content="My Team, multi-page website " />
      </Helmet>
      <Navbar />
      <HeroHome />
      <Product />
      <Testimonials />
      <Start />
      <Footer />
    </motion.div>
  );
};

export default Home;
