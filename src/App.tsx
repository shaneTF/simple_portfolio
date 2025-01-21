function App() {
  const headerContent = {
    title: "Shane Franklin",
    subTitle: "Developer/Designer",
    description:
      "Software Developer living in Indiana, freelancer, former Web Support Specialist with Cherokee Federal, former Software Developer with Sogeti USA, and former Contractor with Infosys Systems.",
  };

  const contactStyling = {
    swipeSetup:
      "w-0 h-full bg-slate-100 absolute left-0 top-0 ease-in duration-300 transition-all group-hover:w-full cursor-pointer",
    swipeHoverTransition:
      "w-full text-white transition-colors duration-300 ease-in-out group-hover:text-blue-950 z-10 cursor-pointer",
    linkStyle:
      "inline-flex relative font-display text-sm font-extrabold uppercase mr-3 mb-2.5 py-4 px-[22px] border-4 overflow-hidden transition-all group",
  };

  const careerDateStyling = {
    dateBox: "bg-white text-blue-950 font-bold px-[8px] py-[5px]",
  };

  const certificationStyling = {
    certNameStyle:
      "inline-block border-4 mr-3 mb-2.5 py-4 px-[22px] font-display text-sm text-nowrap font-extrabold uppercase",
  };

  return (
    <>
      <div className="relative mx-auto pt-24 h-max w-[50rem]">
        <section className="block mb-20">
          <h1 className="text-7xl font-bold font-display uppercase">
            {headerContent.title}
          </h1>
          <h1 className="text-3xl font-display uppercase mb-10">
            {headerContent.subTitle}
          </h1>
          <p className="text-wrap w-3/4">{headerContent.description}</p>
        </section>
        <section className="block mb-20">
          <h1 className="text-[40px] font-bold font-display uppercase mb-10">
            Contact
          </h1>
          <div className="h-[59px]">
            <a
              className={contactStyling.linkStyle}
              href="https://www.linkedin.com/in/shane-franklin/"
              target="_blank"
            >
              <span className={contactStyling.swipeSetup}></span>
              <span className={contactStyling.swipeHoverTransition}>
                Linkedin
              </span>
            </a>
            <a
              className={contactStyling.linkStyle}
              href="https://github.com/shaneTF"
              target="_blank"
            >
              <span className={contactStyling.swipeSetup}></span>
              <span className={contactStyling.swipeHoverTransition}>
                Github
              </span>
            </a>
            <a
              className={contactStyling.linkStyle}
              href="mailto:shanefranklin148@gmail.com"
              target="_blank"
            >
              <span className={contactStyling.swipeSetup}></span>
              <span className={contactStyling.swipeHoverTransition}>
                shanefranklin148@gmail.com
              </span>
            </a>
          </div>
        </section>
        <section className="block mb-20">
          <h1 className="text-[40px] font-bold font-display uppercase mb-10">
            Career
          </h1>
          <div className="mb-[30px]">
            <div className="font-display font-bold text-xl mb-2.5">
              Web Support Specialist III
            </div>
            <div>
              <span className={careerDateStyling.dateBox}>2024</span>
              &nbsp;
              <span className="font-extrabold">&gt;</span>
              &nbsp;
              <span className={careerDateStyling.dateBox}>2024</span>
            </div>
          </div>
          <div className="mb-[30px]">
            <div className="font-display font-bold text-xl mb-2.5">
              Freelancer
            </div>
            <div>
              <span className={careerDateStyling.dateBox}>2023</span>
              &nbsp;
              <span className="font-extrabold">&gt;</span>
              &nbsp;
              <span className={careerDateStyling.dateBox}>2024</span>
            </div>
          </div>
          <div className="mb-[30px]">
            <div className="font-display font-bold text-xl mb-2.5">
              Software Engineer Contractor
            </div>
            <div>
              <span className={careerDateStyling.dateBox}>2021</span>
              &nbsp;
              <span className="font-extrabold">&gt;</span>
              &nbsp;
              <span className={careerDateStyling.dateBox}>2023</span>
            </div>
          </div>
          <div className="mb-[30px]">
            <div className="font-display font-bold text-xl mb-2.5">
              Senior Software Associate
            </div>
            <div>
              <span className={careerDateStyling.dateBox}>2018</span>
              &nbsp;
              <span className="font-extrabold">&gt;</span>
              &nbsp;
              <span className={careerDateStyling.dateBox}>2020</span>
            </div>
          </div>
        </section>
        <section className="block mb-20">
          <h1 className="text-[40px] font-bold font-display uppercase  mb-[30px]">
            Projects
          </h1>
          <div>
            <div className="text-xl font-display uppercase mb-2.5">
              Personal Projects
            </div>
            <a
              className={contactStyling.linkStyle}
              href="https://top.gg/bot/1018191738696904715"
              target="_blank"
            >
              <span className={contactStyling.swipeSetup}></span>
              <span className={contactStyling.swipeHoverTransition}>
                Clash Royale Bot
              </span>
            </a>
            <div className="text-xl font-display uppercase mb-2.5">
              College Projects
            </div>
            <a
              className={contactStyling.linkStyle}
              href="https://github.com/GuyFallsDownStudio/FairyTrails"
              target="_blank"
            >
              <span className={contactStyling.swipeSetup}></span>
              <span className={contactStyling.swipeHoverTransition}>
                Fairy Trails
              </span>
            </a>
          </div>
        </section>
        <section className="block mb-20">
          <h1 className="text-[40px] font-bold font-display uppercase mb-[30px]">
            Certifications
          </h1>
          <div className="flex flex-wrap">
            <div className={certificationStyling.certNameStyle}>
              Certified Associate
              <span className="text-slate-50/50 whitespace-pre"> in </span>
              Python Programming
            </div>
            <div className={certificationStyling.certNameStyle}>
              <span>SAFE Certified</span>
            </div>
            <div className={certificationStyling.certNameStyle}>
              <span>
                Splunk Core
                <span className="text-slate-50/50 whitespace-pre">
                  {" "}
                  Certified{" "}
                </span>
                Power User
              </span>
            </div>
            <div className="inline-block border-4 mr-3 mb-2.5 py-4 px-[22px] font-display text-sm text-nowrap font-extrabold uppercase">
              <div>
                Comptia
                <span className="text-slate-50/50 whitespace-pre"> A+ </span>
                Certified
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
