import { Epilogue } from "@next/font/google";
const Nav = () => {
  return (
    <>
      <div className="w-full h-[78px] flex flex-row justify-between items-center content-center px-[42px] py-6 gap-[24px]">
        <div className="text-bold font-semibold text-xl leading-[30px]">
          <p>Logo</p>
        </div>
        <div className="flex justify-end items-start gap-x-6 text-[17px] font-normal leading-[27px]">
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
};
export default Nav;
