import Button from "@/app/component/Button";
import TitleAndSubTitle from "@/app/components/HeaderSection/TitleAndSubTitle";

const HeaderContent = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-12">
        <TitleAndSubTitle></TitleAndSubTitle>
        <Button text="Contact"></Button>
      </div>
    </>
  );
};

export default HeaderContent;
