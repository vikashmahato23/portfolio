import { Github, LucideExternalLink } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

import { ProjectData } from "./constant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NextImage from "@/components/NextImage";

function ProjectsPage() {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center px-3 my-5">
      <h1 className="text-3xl font-bold text-center border-b-2 border-blue-600 pb-4">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate_in w-full max-w-6xl">
        {ProjectData.map(
          ({ title, live, description, github, techstack, logo }, index) => (
            <Card
              key={index}
              className="shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="relative w-full h-48 md:h-64 lg:h-80">
                  {/* <Image src={"/find.png"} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" /> */}/
                     <NextImage
          src={logo}
          width={""}
          height={""}
          alt="Vikash Mahato"
          layout="fill" objectFit="cover" className="rounded-t-lg"
        />
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-4">
                  <h3 className="text-xl font-medium">{title}</h3>
                  <div className="flex mt-2 lg:mt-0 gap-2">
                    <Link href={live} target="_blank">
                      <Button variant="secondary">
                        <LucideExternalLink size={18} className="mr-1" /> View Live
                      </Button>
                    </Link>
                    <Link href={github} target="_blank">
                      <Button variant="outline">
                        <Github size={18} className="mr-1" /> Github
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-base leading-relaxed mt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {techstack.map((tech, index) => (
                    <Badge key={index} variant={"outline"}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
