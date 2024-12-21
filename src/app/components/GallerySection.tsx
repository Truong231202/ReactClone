import Title from "@/component/Title";
import Description from "@/component/Description";
import GalleryCard from "@/app/components/GalleryCard";

const GallerySection: React.FC = () => {
  const gallery = [
    {
      id: 1,
      title: "Project title",
      description: "UI, Art drection",
      imageSrc: "/images/Gallery/GalleryImage1.png",
      imgAlt: "GalleryImage",
    },
    {
      id: 2,
      title: "Project title",
      description: "UI, Art drection",
      imageSrc: "/images/Gallery/GalleryImage2.png",
      imgAlt: "GalleryImage",
    },
    {
      id: 3,
      title: "Project title",
      description: "UI, Art drection",
      imageSrc: "/images/Gallery/GalleryImage3.png",
      imgAlt: "GalleryImage",
    },
    {
      id: 4,
      title: "Project title",
      description: "UI, Art drection",
      imageSrc: "/images/Gallery/GalleryImage4.png",
      imgAlt: "GalleryImage",
    },
    {
      id: 5,
      title: "Project title",
      description: "UI, Art drection",
      imageSrc: "/images/Gallery/GalleryImage5.png",
      imgAlt: "GalleryImage",
    },
    {
      id: 6,
      title: "Project title",
      description: "UI, Art drection",
      imageSrc: "/images/Gallery/GalleryImage6.png",
      imgAlt: "GalleryImage",
    },
  ];
  return (
    <>
      <div className="h-[1030px] w-full px-6 py-[42px] flex flex-col items-center gap-[42px]">
        <h1 className="font-semibold text-[32px] leading-[42px] text-center">
          Latest work
        </h1>
        <div className="w-full h-[862px] grid grid-cols-3  justify-between gap-6">
          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imgAlt={item.imgAlt}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default GallerySection;
