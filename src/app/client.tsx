"use client";

import About from "../components/layout/About";
import BurgerMenu from "../components/navigation/menu/BurgerMenu";
import Footer from "../components/layout/Footer";
import { GlobalStateProvider } from "../contexts/GlobalStateContext";
import Hero from "../components/layout/Hero";
import Modal from "../components/layout/Modal";
import Navbar from "../components/navigation/menu/Navbar";
import Projects from "../components/layout/Projects";
import React from "react";
import Services from "../components/layout/Services";

export function Client() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </GlobalStateProvider>
  );
}

export default Client;
