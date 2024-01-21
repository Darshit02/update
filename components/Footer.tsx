import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-fit w-full py-10 overflow-hidden">
      <div className="text-white container">
        <div className="flex flex-col">
          <label className="text-6xl font-bold my-10">Let's talk!</label>
          <button className="bg-[#F0F539] hover:cursor-pointer w-[10rem] rounded-full text-black mb-6 md:mb-10 xl:mb-14 p-2 font-medium">
            Get in touch
          </button>
        </div>
        <div className="flex flex-row gap-10 md:gap-[20rem] lg:gap-[30rem] items-center ">
          <div>
            <div className="my-3">
              Reach out
              <a
                href="mailto:darshitmistry2@gmail.com"
                className="hover:text-[#d7dc61]"
              >
                {" "}
                darshit@gmail
              </a>
            </div>
            <div className="flex gap-3">
              <Link href="/">
                <Github className="hover:text-[#d7dc61]" />
              </Link>
              <Link href="/">
                <Linkedin className="hover:text-[#d7dc61]" />
              </Link>
              <Link href="/">
                <Instagram className="hover:text-[#d7dc61]" />
              </Link>
              <Link href="/">
                <Twitter className="hover:text-[#d7dc61]" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href="/" className="hover:text-[#faff72]">
              <span>Home</span>
            </Link>
            <Link href="/" className="hover:text-[#d7dc61]">
              <span>Services</span>
            </Link>
            <Link href="/" className="hover:text-[#d7dc61]">
              <span>Project</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
