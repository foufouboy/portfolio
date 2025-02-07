import githubIcon from "../assets/github.png";
import mailIcon from "../assets/mail.png";
import chevronUp from "../assets/chevrons-up.svg";

function Footer() {
  return (
    <footer className="bg-nav-bg relative flex h-[160px] flex-col items-center justify-center gap-3">
      <div className="links flex gap-3">
        <a
          href="https://github.com/foufouboy"
          target="_blank"
          className="transition-transform duration-300 hover:scale-125"
        >
          <img src={githubIcon} alt="Github link" className="w-[36px]" />
        </a>
        <a
          href="mailto:cissaclement@gmail.com"
          target="_blank"
          className="transition-transform duration-300 hover:scale-125"
        >
          <img src={mailIcon} alt="Mail link" className="w-[36px]" />
        </a>
      </div>
      <p className="disclaimer text-p">ISSA CLEMENT ©2025</p>
      <a
        href="#hero"
        className="scroll-back bg-primary-contrast absolute top-[-28px] right-1/2 flex h-12 w-10 translate-x-1/2 cursor-pointer items-center justify-center hover:animate-bounce"
      >
        <img src={chevronUp} alt="chevrons scroll-back" className="w-15 pb-1" />
      </a>
    </footer>
  );
}

export default Footer;
