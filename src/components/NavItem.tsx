function NavItem({ text, link, active }) {
  return (
    <li
      className={`hover:text-primary-contrast font-[600] transition-colors duration-300 ${active && "text-primary-contrast"} `}
    >
      <a href={link}>{text}</a>
    </li>
  );
}

export default NavItem;
