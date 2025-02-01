//prettier-ignore

function Subtitle({ text, classes }) {
  return (
    <h2 className={`relative z-1 text-[2.7rem] font-bold before:inset-7 before:z-[-1] before:tl before:absolute before:w-full before:h-[60%] before:bg-blue-600 before:block ${classes}`}>
        {text}
    </h2>
  );
}

export default Subtitle;
