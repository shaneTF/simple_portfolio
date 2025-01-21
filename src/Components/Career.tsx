export default function Career() {
  const careerDateStyling = {
    dateBox: "bg-white text-blue-950 font-bold px-[8px] py-[5px]",
  };

  return (
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
        <div className="font-display font-bold text-xl mb-2.5">Freelancer</div>
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
  );
}
