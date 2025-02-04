export default function Header() {
  const headerContent = {
    title: "Shane Franklin",
    subTitle: "Developer/Designer",
    description:
      "Software Developer living in Indiana, freelancer, former Web Support Specialist with Cherokee Federal, former Software Developer with Sogeti USA, and former Contractor with Infosys Systems.",
  };

  return (
    <section className="block w-screen mb-20 md:w-auto">
      <h1 className="text-7xl text-center font-bold font-display uppercase md:text-left">
        {headerContent.title}
      </h1>
      <h1 className="text-3xl text-center font-display uppercase mb-10 md:text-left">
        {headerContent.subTitle}
      </h1>
      <p className="text-wrap text-center md:w-3/4 md:text-left">
        {headerContent.description}
      </p>
    </section>
  );
}
