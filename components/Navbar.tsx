import React from "react";
import { Button } from "@/components/ui/button";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="w-full h-12 px-12 flex justify-between items-center">
      <div className="text-xl font-semibold font-sans">
        Darshit
      </div>
      <div className="flex  justify-center items-center gap-3">
        <Button className="rounded-full border border-slate-400">
            Contact
        </Button>
        <div>
            <Menu/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
