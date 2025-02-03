"use client";

import { Profile } from "./pages/profile";
import { Projects } from "./pages/projects";
import { Achievements } from "./pages/achievements";
import { Contact } from "./pages/contact";
import { Education } from "./pages/education";
import { useEffect, useState } from "react";
import { client } from "./helper/cms";
import { Header } from "./pages/header";
import { Experience } from "./pages/experience";

export default function Home() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Profile />
      {/* <Projects /> */}
      <Education />
      <Experience />
      <Achievements />
      {/* <Contact /> */}
    </div>
  );
}
