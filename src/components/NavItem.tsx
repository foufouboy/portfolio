function NavItem({ text, link, active }) {
  return (
    <li
      className={`transition-colors duration-300 hover:text-red-500 ${active && "text-red-500"} `}
    >
      <a href={link}>{text}</a>
    </li>
  );
}

export default NavItem;
