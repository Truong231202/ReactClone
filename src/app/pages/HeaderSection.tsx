import HeaderContent from "@/app/components/HeaderSection/HeaderContent";
import HeaderImage from "@/app/components/HeaderSection/HeaderImage";

const HeaderSection = () => {
  return (
    <>
      <div className="w-full h-[444px] px-6 py-[42px] flex flex-wrap flex-row content-center justify-between items-center ">
        <HeaderContent></HeaderContent>
        <HeaderImage></HeaderImage>
      </div>
    </>
  );
};

export default HeaderSection;
