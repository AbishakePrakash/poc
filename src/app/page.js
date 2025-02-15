"use client";

import { Profile } from "./components/profile";
import { Projects } from "./components/projects";
import { Achievements } from "./components/achievements";
import { Contact } from "./components/contact";
import { Education } from "./components/education";
import { useEffect, useState } from "react";
import { client } from "./helper/cms";
import { Header } from "./components/header";
import { Experience } from "./components/experience";
import { Cv } from "./components/cv";
import FanAnimation from "./components/fan";
import Navbar from "./components/navbar";

export default function Home() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="">
      <Profile />
      <Projects />
      <Cv />
      <Achievements />
      <Contact />
    </div>
  );
}
