//prettier-ignore

function Subtitle({ text, classes }) {
  return (
    <h2 className={`${classes} relative z-1 text-4xl sm:text-5xl lg:text-6xl font-bold before:inset-7 before:z-[-1] before:tl before:absolute before:w-full before:h-[60%] before:bg-blue-600 before:block my-16 lg:my-29`}>
        {text}
    </h2>
  );
}

export default Subtitle;
