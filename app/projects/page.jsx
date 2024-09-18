"use client";
import React from "react";
import { GanttChartSquare, CandlestickChart, Search, Route } from "lucide-react";
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
    title: "Web-portfolio",
    desc: "Developed a fully responsive personal portfolio website using React, CSS, and HTML. Implemented dynamic backend functionality with NodeJS, including user authentication and content management. Deployed on Cloudflare for optimized performance and security.",
  },
  {
    icon: <CandlestickChart size={72} strokewWidth={0.8} />,
    title: "Trading strategy",
    desc: "Developing and code custom trading strategies using Pine Script. Back-testing of algorithms on historical market data to ensure high WR and profitable. Managing real-time trading with a focus on technical analysis and risk management.",
  },
  {
    icon: <Search size={72} strokewWidth={0.8} />,
    title: "Search Engine",
    desc: "Collaborated on a school project to build a search engine webpage. Utilized React for the user interface and SQL for backend data management. Implemented database schemes for indexing and query optimization to ensure fast and relevant search results.",
  },
  {
    icon: <Route size={72} strokewWidth={0.8} />,
    title: "Flight Planner",
    desc: "Implemented an exhaustive flight search algorithm using Java, employing iterating backtracking with a stack to track and maintain information efficiently. Developed as a school project to demonstrate algorithmic expertise and advanced problem-solving skills.",
  },
];
const projects = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto py-6">
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
                  <div className="w-[10vw] h-[7vw] xl:w-[140px] xl:h-[80px] bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title} </CardTitle>
                  <CardDescription className="text-lg">
                    {item.desc}
                  </CardDescription>
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
