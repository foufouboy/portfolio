function NavItem({ text, link, active }) {
  return (
    <li
      className={`font-[600] transition-colors duration-300 hover:text-red-500 ${active && "text-primary-red"} `}
    >
      <a href={link}>{text}</a>
    </li>
  );
}

export default NavItem;
