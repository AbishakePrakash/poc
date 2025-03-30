"use client"
import {About} from "@/app/components/About";
import {Projects} from "@/app/components/Projects";
import {CV} from "@/app/components/CV";
import {Contact} from "@/app/components/Contact";
import { useData } from "./context/dataContext";

export default function Home() {
  const { profile, loading } = useData();
  if (loading) return <p>Loading...</p>;
  console.log(profile);
  
  return (
    <div className="min-h-screen flex flex-col">
      <About />
      <Projects />
      <CV />
      <Contact />
    </div>
  );
}
