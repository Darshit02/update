import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BTN from "@/components/BTN";
import { File, Home, Pen, PenTool, User } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: File,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: PenTool,
  },
];

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <BTN />
      </SheetTrigger>
      <SheetContent>
        <SheetDescription className="mt-10">
          {links.map((link, index) => (
            <div
              key={index}
              className="text-lg font-semibold font-sans flex items-center gap-5 hover:bg-gray-200 text-black h-10 mb-4 w-full cursor-pointer px-4 hover:rounded-md"
            >
              {link.icon && <link.icon className="inline-block mr-2" />}
              {link.name}
            </div>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
