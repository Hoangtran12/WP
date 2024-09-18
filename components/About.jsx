import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Send, School2 } from "lucide-react";
import {
  SiPostgresql,
  SiFigma,
  SiVisualstudio,
  SiPython,
  SiLinux,
  SiGithub,
  SiCloudflare,
} from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import AboutImg from "./AboutImg";

const qualificationPart = [
  {
    title: "education",
    data: [
      {
        university: "The University of Texas at Dallas",
        major: "Bachelor of Science",
        courseRelated:
          "Data Structures and Algorithms, Linux & Unix, Database, Operating System, Software Engineering,",
        graduation: "Expected graduate May 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Samsung Semiconductor",
        role: "Laser Testing",
        desc: "Assisted senior engineers with laser integration processes, conducted component testing, and ensured adherence to quality standards. Gained hands-on experience with laser technology and contributed to team projects.",
        years: "May 2019-Aug 2019",
      },
      {
        company: "Self-Employed",
        role: "Day Trader",
        desc: "Developed and coded custom trading strategies using Python. Back-tested algorithms on historical market data to ensure profitability. Managed real-time trading of stocks and cryptocurrencies, focusing on technical analysis, risk management, and strategy optimization.",
        years: "May 2021-Present",
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
        name: "Dynamic Programming, Algorithms",
      },
      {
        name: "HTML, Javascript, Typescript, and CSS",
      },
      {
        name: "Web-development",
      },
      {
        name: "SQL, MySQL",
      },
      {
        name: "Query & Database Management",
      },
    ],
  },
  {
    title: "Tools and Software",
    data: [
      {
        icon: <SiFigma size={30} />,
      },
      {
        icon: <SiPostgresql size={30} />,
      },
      {
        icon: <SiVisualstudio size={30} />,
      },
      {
        icon: <SiPython size={30} />,
      },
      {
        icon: <SiLinux size={30} />,
      },
      {
        icon: <DiNetbeans size={30} />,
      },
      {
        icon: <SiGithub size={30} />,
      },
      {
        icon: <SiCloudflare size={30} />,
      },
    ],
  },
];
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

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
                  Journey
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="expertise">
                  Expertise
                </TabsTrigger>
              </TabsList>
              <div className="txt-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Few things about me:</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Hey there! I’m Hoang Tran, a Computer Science student with
                      a curiosity for solving complex challenges.
                      <br />
                      My passion lies in crafting innovative solutions and
                      strategically planning projects that push the boundaries
                      of dynamic programming. <br />
                      Whether it's developing cutting-edge applications or
                      diving into the depths of algorithmic trading, there will
                      be an opportunity to make it work and bring it to reality.
                      <br />
                      I’m always excited about new opportunities to learn, grow,
                      and make a meaningful impact in the tech world.
                    </p>
                    <div className="border-b border-border my-8"></div>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      <div className="flex items-center gap-x-6 mx-auto xl:mx-0">
                        <Link href="/contact">
                          <Button className="gap-x-2 hover:bg-secondary-foreground hover:text-secondary">
                            Contact Me <Send size={18} />
                          </Button>
                        </Link>
                        <Link href="/dev-resume.pdf">
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
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <School2 />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationPart, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationPart, "education").data.map(
                            (item, index) => {
                              const {
                                university,
                                major,
                                courseRelated,
                                graduation,
                              } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group:"
                                  key={index}
                                >
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {major}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {courseRelated}
                                    </div>
                                    <div className="text-base font-medium">
                                      {graduation}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <School2 />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationPart, "experience").title}
                          </h4>
                        </div>
                        <div>
                          {getData(qualificationPart, "experience").data.map(
                            (item, index) => {
                              const { company, role, desc, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group:"
                                  key={index}
                                >
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {desc}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="expertise">
                  <div className="text-center xl:text-left">
                    <h4 className="font-semibold text-xl leading-none mb-2">
                      Programming Languages
                    </h4>
                    <div className="mb-16">
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "Programming Language").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl leading-none mb-2">
                        App
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {shuffleArray(
                          getData(skillData, "Tools and Software").data
                        ).map((item, index) => {
                          const { icon } = item;
                          return (
                            <div
                              className="w-1/4 text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="text-lg leading-none text-muted-foreground mb-4">
                                {icon}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
