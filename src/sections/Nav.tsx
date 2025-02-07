import NavItem from "../components/NavItem";
import { navItems } from "../scripts/data";
import { useState } from "react";

function Nav({ visibleSection }) {
  return (
    <nav className="shadow-[rgb(0 0 0, .5)] sticky top-0 z-999 overflow-hidden shadow-md">
      <ul className="bg-nav-bg flex justify-center gap-5 py-4 tracking-widest sm:justify-end sm:pr-5 lg:gap-8 lg:pr-9">
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.title + "_nav_item"}
              link={`#${item.link}`}
              text={item.title}
              active={item.link === visibleSection}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
