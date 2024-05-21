"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import NextImage from "@/components/NextImage";

const Education = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="max-w-3xl mx-auto">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li className="mb-10 ml-6 " key={data.name}>
              <div className="flex items-center">
             
                  <NextImage
                    src={data.logo}
                    width={80}
                    height={80}
                    className="rounded-full"
                    alt={data.name}
                  />
      
                <div className="ml-4 animate_in">
                  <h3 className="flex flex-col lg:flex-row text-lg font-semibold">
                    {data.name}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="max-w-fit max-md:my-1 md:ml-3 px-3 py-1 rounded-full"
                    >
                      {data.timeSpan}
                    </Button>
                  </h3>
                  <p className="text-base flex flex-wrap gap-1 mt-2 font-medium text-gray-600 dark:text-gray-400">
                    {data.department}
                     <span className="text-base font-mono text-gray-600 dark:text-gray-400">
                    ({data.course})
                  </span>
                  </p>
                 
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;

const Data = [
    {
    name: "Masai School",
    logo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png",
    timeSpan: "Nov 2021 - sep 2022",
    department: "Full stack web devlopment",
    course: null,
  },
  {
    name: "Karim City College",
    logo: "https://karimcitycollege.ac.in/wp-content/uploads/2022/08/logo1-300x65.jpg",
    timeSpan: "2017 - 2020",
    department: "Physics hounrs",
    course: "Bachelor of Science",
  },

];