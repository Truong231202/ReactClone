const Nav = () => {
  return (
    <>
      <div className="w-full  flex flex-row justify-between items-center content-center px-[42px] py-6 gap-6">
        <div className="font-[#2D2D2D] text-bold font-semibold text-xl leading-[30px]">
          <p>Logo</p>
        </div>
        <div className="flex justify-end items-start gap-6 text-[17px] font-[#2D2D2D] font-normal leading-[27px]">
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
};
export default Nav;
