"use client";
import React from "react";
import { UserRound, PhoneForwarded, Mails, Github, Linkedin  } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
const info = [
  {
    icon: <UserRound size={20} />,
    text: "Hoang Tran",
  },
  {
    icon: <PhoneForwarded size={20} />,
    text: "+1 (512)-210-1589",
  },
  {
    icon: <Mails size={20} />,
    text: "hoangtranjan12@gmail.com",
  },
  {
    icon: <Github size={20} />,
    text: "https://github.com/Hoangtran12",
  },
  {
    icon: <Linkedin size={20} />,
    text: "https://www.linkedin.com/in/hoangtran12/",
  },
];
const contact = () => {
  return (
    <section className="mx-auto">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-primary to-secondary py-8 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
            <div className="grid gap-4 mb-12">
              {info.map((item, index) => {
                return (
                  <div
                    className="flex items-center gap-x-4 mx-auto xl:mx-0 text-secondary-foreground"
                    key={index}
                  >
                    <div>{item.icon}</div>
                    <div>{item.text}</div>
                  </div>
                );
              })}
            </div>
        </motion.h1>
      </LampContainer>
    </section>
  );
};

export default contact;
