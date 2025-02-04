export default function Certifications() {
  const certificationStyling = {
    certNameStyle:
      "inline-block border-4 mr-3 mb-2.5 py-4 px-[22px] font-display text-sm text-nowrap font-extrabold uppercase",
  };

  return (
    <section className="block mb-20">
      <h1 className="text-[40px] font-bold font-display uppercase mb-[30px]">
        Certifications
      </h1>
      <div className="flex flex-wrap">
        <div className="inline-block border-4 mr-3 mb-2.5 py-4 px-[22px] font-display text-sm text-wrap md:text-nowrap font-extrabold uppercase">
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
            <span className="text-slate-50/50 whitespace-pre"> Certified </span>
            Power User
          </span>
        </div>
        <div className={certificationStyling.certNameStyle}>
          <div>
            Comptia
            <span className="text-slate-50/50 whitespace-pre"> A+ </span>
            Certified
          </div>
        </div>
      </div>
    </section>
  );
}
