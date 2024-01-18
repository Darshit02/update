"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Human from "@/public/human.png";

const Content = () => {
  return (
    <div className="my-20 flex flex-col md:flex-row justify-between items-center">
      <div className="p-10 md:px-[15rem] flex flex-col justify-center">
        <h1 className="text-sm font-bold font-mono">Hello();</h1>
        <p className="text-3xl pt-2">
          I am <span>Darshit Mistry</span>
        </p>
        <p className="mt-7">
          I have very much cleared the basics of React, Tailwind CSS, Next.js,
          TypeScript, and many more.I am a lifelong learner, and I am
          continually expanding my skill set to adapt to the ever-evolving
          landscape of web development.
        </p>
        <Button className="mt-8 inline-block w-[7rem] rounded-full border border-gray-500" variant="outline">
          <Github size={20} className="inline-block mr-2" />
          GitHub
        </Button>
      </div>
      <div className="hidden">
        <Image src={Human} className="h-20 w-20" width={40} height={40} alt="human"/>
      </div>
    </div>
  );
};

export default Content;
