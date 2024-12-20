import SkillsCard from "@/app/components/SkillsSection/SkillsCard";

const SkillsSection = () => {
  return (
    <>
      <div className="w-full h-[513px] px-[42px] py-6 flex flex-col items-center gap-[42px] ">
        <div className="w-full h-full flex flex-row justify-between items-center gap-[24px] px-[42px] py-6 ">
          <SkillsCard
            imageSrc={"./images/SkillsCards/ProductDesign.png"}
            imgAlt={"ProductDesign"}
            title={"Product Design"}
            description={
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
            }
          ></SkillsCard>
          <SkillsCard
            imageSrc={"./images/SkillsCards/VisualDesign.jpg"}
            imgAlt={"Visual Design"}
            title={"Visual Design"}
            description={
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
            }
          ></SkillsCard>
          <SkillsCard
            imageSrc={"./images/SkillsCards/ArtDirection.png"}
            imgAlt={"Art Direction"}
            title={"Art Direction"}
            description={
              "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
            }
          ></SkillsCard>
        </div>
      </div>
    </>
  );
};
export default SkillsSection;
