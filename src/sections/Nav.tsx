import NavItem from "../components/NavItem";
import { navItems } from "../scripts/data";
import { useState } from "react";

function Nav({ visibleSection }) {
  return (
    <nav className="shadow-3xl sticky top-0 z-999 overflow-hidden">
      <ul className="bg-nav-bg flex justify-center gap-5 py-4">
        {navItems.map((item) => {
          return (
            <NavItem
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
