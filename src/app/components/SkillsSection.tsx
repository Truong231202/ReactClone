import SkillsCard from "@/app/components/SkillsCard";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      image: "./images/SkillsCards/ProductDesign.png",
      alt: "Product Design",
      title: "Product Design",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      id: 2,
      image: "./images/SkillsCards/VisualDesign.jpg",
      alt: "Visual Design",
      title: "Visual Design",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      id: 3,
      image: "./images/SkillsCards/ArtDirection.png",
      alt: "Art Direction",
      title: "Art Direction",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
  ];
  return (
    <>
      <div className="w-full h-[513px] px-6 py-[42px] flex flex-col items-center gap-[42px] ">
        <div className="w-full h-full flex flex-row justify-between items-center gap-[24px] px-[42px] py-6 ">
          {skills.map((item) => (
            <SkillsCard
              key={item.id}
              imageSrc={item.image}
              imgAlt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default SkillsSection;
