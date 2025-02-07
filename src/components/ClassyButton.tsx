function ClassyButton({ children, type, classes }) {
  return (
    <button
      className={`${classes} group relative flex cursor-pointer items-center justify-center px-2 py-1 font-semibold text-white`}
      type={type}
    >
      <div className="content relative z-9 group-hover:text-black">
        {children}
      </div>
      <div className="bg-primary-contrast absolute bottom-0 h-0.5 w-full transition-all duration-300 ease-in-out group-hover:h-full"></div>
    </button>
  );
}

export default ClassyButton;
