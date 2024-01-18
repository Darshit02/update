"use client";

import { Button } from "@/components/ui/button";
import { Github, MoveDown } from "lucide-react";

const Content = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-10">
      <div className="p-10 md:px-[15rem] my-20 flex flex-col justify-center">
        <h1 className="text-4xl font-bold font-mono">Hello();</h1>
        <p className="text-4xl pt-2 font-mono">
          I am <span>Darshit Mistry</span>
        </p>
        <p className="mt-5">
          I have very much cleared the basics of React, Tailwind CSS, Next.js,
          TypeScript, and many more.I am a lifelong learner, and I am
          continually expanding my skill set to adapt to the ever-evolving
          landscape of web development.
        </p>
        <Button
          className="mt-8 inline-block w-[7rem] rounded-full border border-gray-500"
          variant="outline"
        >
          <Github size={20} className="inline-block mr-2" />
          GitHub
        </Button>
      </div>
      <div className="flex hover:cursor-pointer justify-center items-center rounded-full animate-bounce px-2 py-2 bg-[#F0F539]">
        <MoveDown />
      </div>
    </div>
  );
};

export default Content;
