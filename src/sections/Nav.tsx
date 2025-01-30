import NavItem from "../components/NavItem";

function Nav() {
  return (
    <nav className="shadow-3xl sticky top-0 z-999 overflow-hidden">
      <ul className="bg-nav-bg flex justify-center gap-5 py-4">
        <NavItem text="Home" link="#hero" />
        <NavItem text="About" link="#about" />
        <NavItem text="Projects" link="#projects" />
        <NavItem text="Around" link="#around" />
        <NavItem text="Contact" link="#contact" />
      </ul>
    </nav>
  );
}

export default Nav;
