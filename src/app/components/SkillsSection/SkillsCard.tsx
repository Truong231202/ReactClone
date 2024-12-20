type ContentBlockProps = {
  imageSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const SkillsCard = ({
  imageSrc,
  imgAlt,
  title,
  description,
}: ContentBlockProps) => {
  return (
    <>
      <div className="min-w-[320px] w-[320px] h-[456px] px-16 py[42px] flex flex-col items-center  gap-[42px]">
        <div className="w-[124px] h-[124px] flex flex-col items-center ">
          <img src={imageSrc} alt={imgAlt} className="w-full h-full " />
        </div>
        <div className="w-[310px]  h-[135px] flex flex-col items-center just gap-4">
          <h2 className="font-semibold text-[27px] leading-[42px]">{title}</h2>
          <p className="font-normal text-[17px] leading-[27px] text-center">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
