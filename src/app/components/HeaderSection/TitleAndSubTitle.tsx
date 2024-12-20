import Description from "@/app/component/Description";
import { Epilogue } from "next/font/google";

const TitleAndSubTitle = () => {
  return (
    <>
      <div className="w-[602px] h-[202px] flex flex-col gap-6">
        <p className="text-xl leading-[30px] font-semibold ">
          Branding | Image making
        </p>
        <h1 className="text-[68px] font-semibold">Visual Designer</h1>
        <Description
          description="This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com"
        ></Description>
      </div>
    </>
  );
};
export default TitleAndSubTitle;
