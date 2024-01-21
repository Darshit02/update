import { ArrowBigLeft, ArrowRight, Dot, ListEnd, PenLine } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  "UI/UX Design",
  "Web Design",
  "Application Design",
  "Frontend Development",
  "Backend Development",
  "Code Refectoring",
];

const Services = () => {
  return (
    <div className="mt-20 md:mt-[8rem] bg-black w-full h-[30rem] md:[35rem] flex">
      <div className="bg-white justify-center flex items-center">
        <h1 className="-rotate-90 flex justify-center items-center gap-3">
          <PenLine />
          Services
        </h1>
      </div>
      <div className="px-5 md:px-10 md:py-32 py-5 font-extrabold flex justify-between flex-col md:flex-row md:gap-[20rem] ">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl leading-tight">Service I can help You .</h1>
          <p className="font-sm text-wrap mt-2 text-muted/45">
            passion for creating state-of-the-art digital solutions.
          </p>
        </div>
        <div className="text-white font-medium flex flex-col">
          <Button
            variant="outline"
            className="bg-[#F0F539] hover:cursor-pointer w-[10rem] rounded-full text-black mb-6 md:mb-10 xl:mb-14"
          >
            Know More
          </Button>
          <div className="flex items-center gap-4">
            <ArrowRight className="hidden md:block"/>
          <p className="text-sm hidden md:block text-muted/65 mb-3">Intreact with Users on the platform they prefer in webDevelopment and Designing.</p>
          </div>
          {services.map((service) => (
            <div className="flex items-center md:text-sm text-muted md:text-muted/45">
              <div className="flex justify-center items-center">
                <Dot />
              </div>
              <div className="flex justify-center items-center">{service}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
