export default function Projects() {
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
      <h1 className="text-[40px] font-bold font-display uppercase  mb-[30px]">
        Projects
      </h1>
      <div>
        <div className="text-xl font-display uppercase mb-2.5">
          Personal Projects
        </div>
        <a
          className={buttonStyling.linkStyle}
          href="https://top.gg/bot/1018191738696904715"
          target="_blank"
        >
          <span className={buttonStyling.swipeSetup}></span>
          <span className={buttonStyling.swipeHoverTransition}>
            Clash Royale Bot
          </span>
        </a>
        <div className="text-xl font-display uppercase mb-2.5">
          College Projects
        </div>
        <a
          className={buttonStyling.linkStyle}
          href="https://github.com/GuyFallsDownStudio/FairyTrails"
          target="_blank"
        >
          <span className={buttonStyling.swipeSetup}></span>
          <span className={buttonStyling.swipeHoverTransition}>
            Fairy Trails
          </span>
        </a>
      </div>
    </section>
  );
}
