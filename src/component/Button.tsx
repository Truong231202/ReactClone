type ContentBlockProps = {
  text: string;
};

const Button = ({ text }: ContentBlockProps) => {
  return (
    <button
      type="submit"
      className=" inline-flex justify-center items-center bg-black px-[64px] py-[24px] gap-2.5 text-xl leading-[30px] text-white text-semibold text-[20px]"
    >
      {text}
    </button>
  );
};

export default Button;
