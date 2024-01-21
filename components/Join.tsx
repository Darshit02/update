import { ArrowRight } from "lucide-react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Button } from "./ui/button";

const Join = () => {
  return (
    <div className="mx-16">
    <div className="h-[6rem] w-full bg-black text-white flex justify-center items-center my-[7rem]">
      <div className="flex justify-center items-center gap-[10rem]">
        <div className="text-black rounded-full border border-gray-500 h-14 w-14 flex justify-center items-center bg-white">
        <HiOutlineLightBulb className="h-10 w-10 "/>
        </div>
        <span className="text-3xl font-medium">If You Have Creative Ideas, Let's Work Together</span>
        <Button className="bg-[#F0F539] hover:border hover:border-gray-500 rounded-full font-extrabold" variant="outline">
          <ArrowRight className="text-black h-4 w-4"/>
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Join;
