import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Send, School2 } from "lucide-react";
import AboutImg from "./AboutImg";
const qualification = [
  {
    title: "education",
    data: [
      {
        university: "The University of Texas at Dallas",
        major: "Bachelor of Science",
        graduation: "Expected graduate May 2025",
      },
    ],
  },
  {
    title: "work experience",
    data: [
      {
        company: "Samsung Semiconductor",
        role: "Laser Testing",
        years: "May 2019-Aug 2019",
      },
    ],
  },
];
const skillData = [
  {
    title: "Programming Language",
    data: [
      {
        name: "JAVA, C, and Python",
      },
      {
        name: "Programming",
      },
      {
        name: "HTML, Javascript, and CSS",
      },
      {
        name: "Web-development",
      },
    ],
  },
  {
    title: "Tool and Software",
    data: [
      {
        icon: <Download size={20} />,
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-4 xl:mb-16 text-center mx-auto py-6">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <AboutImg
              containerStyles="w-[300px] h-[400px] bg-no-repeat relative"
              imgSrc="/profile.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="education">
                  Work Experience
                </TabsTrigger>
              </TabsList>
              <div className="txt-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Few things about me:</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 ">
                      Passionate and dedicated Computer Science student.
                      <br />
                      Super interesting in solving complex problem. <br />
                      Strategically plan projects with dynamic programming.
                    </p>
                    <div className="border-b border-border my-8"></div>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      <div className="flex items-center gap-x-6 mx-auto xl:mx-0">
                        <Link href="/contact">
                          <Button className="gap-x-2 hover:bg-secondary-foreground hover:text-secondary">
                            Contact Me <Send size={18} />
                          </Button>
                        </Link>
                        <Link href="">
                          <Button
                            variant="secondary"
                            className="gap-x-4 hover:bg-foreground hover:text-secondary"
                          >
                            Resume <Download size={18} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Education Journey
                    </h3>
                    <div>
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <School2 />
                          <h4 className="capitalize font-medium">
                            {getData(qualification, "education").title}
                          </h4>
                        </div>
                        <div></div>
                      </div>
                      <div>efdkfjd</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="education">perssdsdsonal</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
