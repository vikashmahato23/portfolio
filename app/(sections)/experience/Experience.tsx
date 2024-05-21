"use client";
import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="max-w-3xl mx-auto">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li
              className="mb-10 ml-6"
              key={data.name}
            >
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
                  <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                    {data.role}
                  </p>
                  <ul className="list-disc font-sans text-sm mt-2 ml-5">
                    <li className="my-1 text-gray-700 dark:text-gray-300">
                      {data?.about1}
                    </li>
                    <li className="my-1 text-gray-700 dark:text-gray-300">
                      {data?.about2}
                    </li>
                      <li className="my-1 text-gray-700 dark:text-gray-300">
                      {data?.about3}
                    </li>
                      <li className="my-1 text-gray-700 dark:text-gray-300">
                      {data?.about4}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;

const Data = [
  {
    name: "Digited Labs Private Limited",
    logo: "https://digited.in/_next/image?url=%2Fbrand-logo.png&w=256&q=100",
    timeSpan: "Mar 2023 - Current",
    role: "Full-Stack Engineer",
    about1: "Designed and developed engaging landing pages to boost user interaction and conversion rates.",
    about2: "Integrated APIs seamlessly to enhance features and enable smooth data exchange, ensuring a dynamic user experience.",
    about3:"Diligently addressed and resolved bugs and issues, optimizing overall performance and usability of webstie and App.",
    about4:"Actively participated in collaborative brainstorming sessions, contributing innovative ideas for feature enhancements and user experience improvements."
  },
  {
    name: "RTechSpot",
    logo: "https://www.nationalcollegenpd.com/rtechspotLOGO.png",
    timeSpan: "Sep 2022 - Mar 2023",
    role: "Full Stack Web Developer Intern",
    about1: "Assisted in frontend and backend development tasks, including UI/UX design, API integration, and database management.",
    about2: "Learned and applied technologies such as React.js, Node.js, Express.js, and MongoDB.",
    about3:"Collaborated with cross-functional teams to integrate frontend and backend components effectively.",
    about4:"Engaged in testing and debugging activities to ensure the quality and functionality of web applications."
  },
];