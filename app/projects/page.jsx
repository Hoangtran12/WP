"use client";
import React from "react";
import { GanttChartSquare } from "lucide-react";
import {
  Cards,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projectsData = [
  {
    icon: <GanttChartSquare size={72} strokewWidth={0.8} />,
    title: "School Project",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae veniam dolore sint illum itaque quidem laudantium quibusdam impedit inventore illo quod unde, maxime dolorem, dicta voluptatibus dignissimos nesciunt sed.",
  },
  {
    icon: <GanttChartSquare size={72} strokewWidth={0.8} />,
    title: "Self Project",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae veniam dolore sint illum itaque quidem laudantium quibusdam impedit inventore illo quod unde, maxime dolorem, dicta voluptatibus dignissimos nesciunt sed.",
  },
];
const projects = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-4 xl:mb-16 text-center mx-auto py-6">
          Projects
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-32">
          {projectsData.map((item, index) => {
            return (
              <Cards
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title} </CardTitle>
                  <CardDescription className='text-lg'>{item.desc}</CardDescription>
                </CardContent>
              </Cards>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default projects;
