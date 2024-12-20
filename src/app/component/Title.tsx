type ContentBlockProps = {
  title: string;
};

const Title = ({ title }: ContentBlockProps) => {
  return (
    <>
      <h1 className="font-semibold text-[32px] leading-[42px] text-center">
        {title}
      </h1>
    </>
  );
};

export default Title;
