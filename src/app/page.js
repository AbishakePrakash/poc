"use client";

import { Profile } from "./pages/profile";
import { Projects } from "./pages/projects";
import { Achievements } from "./pages/achievements";
import { Contact } from "./pages/contact";
import { Education } from "./pages/education";
import { useEffect, useState } from "react";
import { client } from "./helper/cms";
import { Header } from "./pages/header";

export default function Home() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Header />

      {/* <Profile /> */}
      {/* <Projects /> */}
      <Education />
      {/* <Achievements /> */}
      {/* <Contact /> */}
    </div>
  );
}
