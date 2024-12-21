import TestimonialCard from "@/app/components/TestimonialCard";

const TesmotionalSectionPage: React.FC = () => {
  const Testimonial = [
    {
      id: 1,
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      imgSrc: "/images/Client/UserImage.png",
      altImg: "User Image",
      name: "Gemma Nolen",
      company: "Google",
      rating: 5,
    },

    {
      id: 2,
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      imgSrc: "/images/Client/UserImage.png",
      altImg: "User Image",
      name: "Gemma Nolen",
      company: "Google",
      rating: 5,
    },
    {
      id: 3,
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      imgSrc: "/images/Client/UserImage.png",
      altImg: "User Image",
      name: "Gemma Nolen",
      company: "Google",
      rating: 5,
    },
    {
      id: 4,
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      imgSrc: "/images/Client/UserImage.png",
      altImg: "User Image",
      name: "Gemma Nolen",
      company: "Google",
      rating: 5,
    },
    {
      id: 5,
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      imgSrc: "/images/Client/UserImage.png",
      altImg: "User Image",
      name: "Gemma Nolen",
      company: "Google",
      rating: 5,
    },
    {
      id: 6,
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      imgSrc: "/images/Client/UserImage.png",
      altImg: "User Image",
      name: "Gemma Nolen",
      company: "Google",
      rating: 5,
    },
  ];
  return (
    <>
      <div className="w-full max-h-[852px] px-6 py-[42px] flex flex-col items-center gap-[42px]">
        <h1 className="font-semibold text-[32px] leading-[42px] text-center">
          Tesmotional
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {Testimonial.map((item) => (
            <TestimonialCard
              key={item.id}
              description={item.description}
              imgSrc={item.imgSrc}
              altImg={item.altImg}
              name={item.name}
              company={item.company}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default TesmotionalSectionPage;
