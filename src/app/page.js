"use client";
import { useState, useEffect } from "react";
import data from "./data/data.json";
import { useTheme } from "./context/Themecontext";
import Link from "next/link";

export default function Home() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {/* {data.map((item, index) => { */}
      {/* return ( */}
      <div className="px-20 py-10 h-dvh bg-background ">
        <div className="text-copy-primary flex items-baseline gap-10">
          <h1 className=" text-[65px] font-normal tracking-widest">
            Prince Kumar
          </h1>
          <span className="text-[24px] font-normal text-gray-500 ">
            -Mern Stack Developer
          </span>
        </div>
        <div className="px-20 py-10 mt-10 space-y-4 text-copy-primary left-0 absolute">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            nobis reprehenderit nisi quia natus voluptatem dolorem blanditiis
            laudantium vitae saepe, unde quaerat vero fuga. Aut quisquam
            recusandae consequuntur quo unde animi quae vitae ullam. Distinctio
            ratione modi vero fugit, soluta rem commodi officiis explicabo,
            officia ex, vel doloribus debitis quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            nobis reprehenderit nisi quia natus voluptatem dolorem blanditiis
            laudantium vitae saepe, unde quaerat vero fuga. Aut quisquam
            recusandae consequuntur quo unde animi quae vitae ullam. Distinctio
            ratione modi vero fugit, soluta rem commodi officiis explicabo,
            officia ex, vel doloribus debitis quidem!
          </p>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
      <div className="px-20 py-10 bg-background flex justify-center items-center h-dvh">
        showreel video here
      </div>

      <div className="text-copy-primary px-10 py-10 bg-background">
        <div className="flex justify-between items-center">
          <h3 className="text-5xl font-normal ">Selected Works</h3>
          <Link
            href="/allworks"
            className="text-xl cursor-pointer hover:text-copy-secondary"
          >
            All Works &gt;
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, 6).map((item, index) => {
            return (
              <div className="flex flex-col space-y-5 mt-10">
                <div className="text-copy-primary bg-copy-secondary h-[300px]">
                  Project Icon
                </div>
                <span className="text-copy-primary">PROJECT TITLE</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-10 py-10 mt-10 bg-background">
        <h1>CV</h1>
        <div className="space-y-8">
          <h3 className="mt-10">Education</h3>
          <div className="space-y-2">
            <p>2023 - present</p>
            <p>adjfak adsjadkjf asdl adkjadsfk dkjfad adjkfads</p>
          </div>
          <div className="space-y-2">
            <p>2023 - present</p>
            <p>adjfak adsjadkjf asdl adkjadsfk dkjfad adjkfads</p>
          </div>
          <div className="space-y-2">
            <p>2023 - present</p>
            <p>adjfak adsjadkjf asdl adkjadsfk dkjfad adjkfads</p>
          </div>
        </div>
        <div className="mt-10 ">
          <h3 className="mb-10">Work Experience</h3>
          <div className="space-y-8">
            <div>
              <p>Nov 2023 - Mar 2024</p>
              <p>Independent Design constultation/freelancer Banglore</p>
              <p>
                Lorem adsjadk dsadskjf ad adkjas dadfakjsdf a adkfja dfadsfjad
                fasdfajdsfa sdfaksdfja sdfaksdf asdfasjdfa sdfaskdfja dfadsfjadd
                fasdfadsjf asdfjads dfakd sfakds fa
              </p>
            </div>
            <div>
              <p>Nov 2023 - Mar 2024</p>
              <p>Independent Design constultation/freelancer Banglore</p>
              <p>
                Lorem adsjadk dsadskjf ad adkjas dadfakjsdf a adkfja dfadsfjad
                fasdfajdsfa sdfaksdfja sdfaksdf asdfasjdfa sdfaskdfja dfadsfjadd
                fasdfadsjf asdfjads dfakd sfakds fa
              </p>
            </div>
            <div>
              <p>Nov 2023 - Mar 2024</p>
              <p>Independent Design constultation/freelancer Banglore</p>
              <p>
                Lorem adsjadk dsadskjf ad adkjas dadfakjsdf a adkfja dfadsfjad
                fasdfajdsfa sdfaksdfja sdfaksdf asdfasjdfa sdfaskdfja dfadsfjadd
                fasdfadsjf asdfjads dfakd sfakds fa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-dvh bg-background px-10 py-10">
        <h1>Patents / Design registrations / Awards / Exhibitions</h1>
        <div className="mt-10 space-y-10">
          <div className="">
            <p>June 2021</p>
            <p>lre adkjafdjkf adkjasdkf peirodsfsjk adkjadf </p>
          </div>
          <div>
            <p>June 2021</p>
            <p>lre adkjafdjkf adkjasdkf peirodsfsjk adkjadf </p>
          </div>
          <div>
            <p>June 2021</p>
            <p>lre adkjafdjkf adkjasdkf peirodsfsjk adkjadf </p>
          </div>
          <div>
            <p>June 2021</p>
            <p>lre adkjafdjkf adkjasdkf peirodsfsjk adkjadf </p>
          </div>
          <div>
            <p>June 2021</p>
            <p>lre adkjafdjkf adkjasdkf peirodsfsjk adkjadf </p>
          </div>
        </div>
      </div>
      <div className="px-10 py-10 text-copy-primary">
        <h1 className="text-2xl">Contact</h1>
        <div className="bg-copy-secondary mt-10 h-[400px] w-[600px]">
          3d image here
        </div>
        <div className="flex items-center space-x-10">
          <p>instagram</p>
          <p>Linkedin</p>
          <p>mrprince@gamil.com</p>
        </div>
      </div>
    </div>
  );
}
