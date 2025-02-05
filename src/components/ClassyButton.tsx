function ClassyButton({ children, type, classes }) {
  return (
    <button className={`${classes}`} type={type}>
      {children}
    </button>
  );
}

export default ClassyButton;
