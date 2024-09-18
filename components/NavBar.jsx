import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

const NavBar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onLinkClick,
}) => {
  const path = usePathname();
  const activeLink = links.find((link) => link.path === path);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <div key={index} className="relative">
          <Link
            href={link.path}
            className={`capitalize ${linkStyles}`}
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
          {activeLink && activeLink.path === link.path && (
            <motion.span
              layoutId="underline"
              className={`${underlineStyles} absolute bottom-0 left-0 right-0 h-1 bg-primary`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
