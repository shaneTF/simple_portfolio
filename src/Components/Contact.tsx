export default function Contact() {
  const buttonStyling = {
    swipeSetup:
      "w-0 h-full bg-slate-100 absolute left-0 top-0 ease-in duration-300 transition-all group-hover:w-full cursor-pointer",
    swipeHoverTransition:
      "w-full text-white transition-colors duration-300 ease-in-out group-hover:text-blue-950 z-10 cursor-pointer",
    linkStyle:
      "inline-flex relative font-display text-sm font-extrabold uppercase mr-3 mb-2.5 py-4 px-[22px] border-4 overflow-hidden transition-all group",
  };

  return (
    <section className="block mb-20">
      <h1 className="text-[40px] font-bold font-display uppercase mb-10">
        Contact
      </h1>
      <div className="h-[59px]">
        <a
          className={buttonStyling.linkStyle}
          href="https://www.linkedin.com/in/shane-franklin/"
          target="_blank"
        >
          <span className={buttonStyling.swipeSetup}></span>
          <span className={buttonStyling.swipeHoverTransition}>Linkedin</span>
        </a>
        <a
          className={buttonStyling.linkStyle}
          href="https://github.com/shaneTF"
          target="_blank"
        >
          <span className={buttonStyling.swipeSetup}></span>
          <span className={buttonStyling.swipeHoverTransition}>Github</span>
        </a>
        <a
          className={buttonStyling.linkStyle}
          href="mailto:shanefranklin148@gmail.com"
          target="_blank"
        >
          <span className={buttonStyling.swipeSetup}></span>
          <span className={buttonStyling.swipeHoverTransition}>
            shanefranklin148@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
}
