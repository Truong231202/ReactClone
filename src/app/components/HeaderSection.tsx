import Button from "@/component/Button";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <>
      <div className="w-full px-6 py-[42px] flex content-center justify-between items-center ">
        <div className="flex flex-col min-w-[320px] max-w-[620px] items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <p className="font-[#2D2D2D] text-xl leading-[30px] font-semibold ">
              Branding | Image making
            </p>
            <h1 className="font-[#2D2D2D] text-[68px] font-semibold">
              Visual Designer
            </h1>

            <p className="font-[#2D2D2D] font-normal text-[17px] leading-[27px]">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
          <Button text="Contact"></Button>
        </div>
        <div className="min-w-[320px] max-w-[480px] h-30">
          <Image
            src="/images/HeaderImage 1.png"
            alt="Header Image"
            width={480}
            height={360}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
