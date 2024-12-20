type ContentBlockProps = {
  text: string;
};

const Button = ({ text }: ContentBlockProps) => {
  return (
    <>
      <button
        type="submit"
        className="flex justify-center w-[211px] h-[78px] bg-black px-[64px] py-[24px] gap-2.5 text-xl leading-[30px] text-white text-semibold"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
