import Adidas from "@/app/icon/Adidas";
import Apple from "@/app/icon/Apple";
import Google from "@/app/icon/Google";
import Nike from "@/app/icon/Nike";
import SamSung from "@/app/icon/SamSung";

const LogoBar = () => {
  return (
    <div className="h-130px px-[68px] py-[42px] flex flex-wrap  justify-between items-center content-center gap-x-[68px] gap-y-[86px] ">
      <Google></Google>
      <Nike></Nike>
      <SamSung></SamSung>
      <Apple></Apple>
      <Adidas></Adidas>
    </div>
  );
};
export default LogoBar;
