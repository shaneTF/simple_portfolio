export default function Header() {
  const headerContent = {
    title: "Shane Franklin",
    subTitle: "Developer/Designer",
    description:
      "Software Developer living in Indiana, freelancer, former Web Support Specialist with Cherokee Federal, former Software Developer with Sogeti USA, and former Contractor with Infosys Systems.",
  };

  return (
    <section className="block mb-20">
      <h1 className="text-7xl font-bold font-display uppercase">
        {headerContent.title}
      </h1>
      <h1 className="text-3xl font-display uppercase mb-10">
        {headerContent.subTitle}
      </h1>
      <p className="text-wrap w-3/4">{headerContent.description}</p>
    </section>
  );
}
