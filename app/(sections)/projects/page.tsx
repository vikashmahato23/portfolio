import { Github, LucideExternalLink } from "lucide-react";
import Link from "next/link";
import NextImage from "@/components/NextImage";

import { ProjectData } from "./constant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function ProjectsPage() {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center px-3 my-5">
      <h1 className="text-3xl font-bold text-center border-b-2 border-blue-600 pb-4">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate_in w-full max-w-4xl">
        {ProjectData.map(
          ({ title, live, description, github, techstack, logo }, index) => (
            <Card
              key={index}
              className="shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-3 flex flex-col gap-2">
                <div className="relative w-full h-36 md:h-48 lg:h-56">
                  <NextImage
                    src={logo}
                    width={""}
                    height={""}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-between mt-2">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <div className="flex mt-1 lg:mt-0 gap-1">
                    <Link href={live} target="_blank">
                      <Button variant="secondary" className="px-2 py-1 text-xs">
                        <LucideExternalLink size={14} className="mr-1" /> View Live
                      </Button>
                    </Link>
                    <Link href={github} target="_blank">
                      <Button variant="outline" className="px-2 py-1 text-xs">
                        <Github size={14} className="mr-1" /> Github
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-xs leading-relaxed mt-1">{description}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {techstack.map((tech, index) => (
                    <Badge key={index} variant={"outline"} className="text-xs py-1 px-2">
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
