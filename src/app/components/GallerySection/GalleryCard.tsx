type ContentBlockProp = {
  title: string;
  description: string;
  imageSrc: string;
  imgAlt: string;
};

const GalleryCard = ({
  title,
  description,
  imageSrc,
  imgAlt,
}: ContentBlockProp) => {
  return (
    <>
      <div className=" flex flex-col items-start gap-6">
        <div className="w-full h-[330px] relative">
          <img
            src={imageSrc}
            alt={imgAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[65px] flex flex-col items-start gap-2">
          <h2 className="font-semibold text-[20px] leading-[30px]">{title}</h2>
          <p className="text-[17px] leading-[27px] font-normal">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
export default GalleryCard;
