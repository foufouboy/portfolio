import { useState } from "react";
import Subtitle from "../components/Subtitle";
import ClassyButton from "../components/ClassyButton";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <div id="contact" className="mb-[5rem] flex flex-col items-center">
      <Subtitle text="Contact" classes="mb-12 md:mb-13 lg:mb-15" />
      <form
        action="https://formspree.io/f/xjkgoblv"
        className="flex w-[80%] flex-col sm:w-[500px] md:w-[600px]"
        method="post"
      >
        <p className="mb-9 md:mb-10 lg:mb-12">
          Have a question or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </p>
        <div className="inputs flex flex-col gap-2">
          <div className="name-input">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className="bg-nav-bg text-p lg:text-p-small w-full px-2 py-1 focus:outline-0"
            />
          </div>
          <div className="email-input">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="bg-nav-bg text-p lg:text-p-small w-full px-2 py-1 focus:outline-0"
            />
          </div>
          <div className="message-input">
            <textarea
              name="message"
              id="message"
              required
              placeholder="Message"
              className="bg-nav-bg text-p lg:text-p-small w-full px-2 py-1 focus:outline-0"
              rows="5"
            />
          </div>
        </div>
        <ClassyButton type="submit" classes="mt-3 self-end">
          Submit
        </ClassyButton>
      </form>
    </div>
  );
}

export default Contact;
