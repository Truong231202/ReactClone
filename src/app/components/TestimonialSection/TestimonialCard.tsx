import StartIcon from "@/app/icon/StartIcon";

type ContentBlockProps = {
  description: string;
  name: string;
  company: string;
  rating: number;
  imgSrc: string;
  altImg: string;
};
const TestimonialCard = ({
  description,
  name,
  company,
  imgSrc,
  rating,
  altImg,
}: ContentBlockProps) => {
  return (
    <>
      <div className="min-w-[320px] w-full flex flex-col items-start p-[42px] bg-[#F3F3F3] ">
        <div className="text-start font-semibold text-[20px] leading-[30px]">
          {description}
        </div>

        <div className="flex flex-row justify-start gap-[16px]">
          <img
            src={imgSrc}
            alt={altImg}
            className="w-[50px] h-[50px] rounded-[50px]"
          />
          <div className="flex flex-col items-start gap-[11px]">
            <div className="flex flex-row justify-start gap-[6px]">
              {Array.from({ length: rating }).map((_, index) => (
                <StartIcon key={index} />
              ))}
            </div>

            <div className="flex flex-col items-start ">
              <p className="font-semibold font-[20px] leading-5 ">{name}</p>
              <p>{company}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
