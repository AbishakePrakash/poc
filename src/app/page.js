"use client";

import { Profile } from "./pages/profile";
import { Projects } from "./pages/projects";
import { Achievements } from "./pages/achievements";
import { Contact } from "./pages/contact";

export default function Home() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Profile />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
