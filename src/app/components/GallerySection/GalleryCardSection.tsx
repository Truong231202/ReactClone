import GalleryCard from "@/app/components/GallerySection/GalleryCard";

const GalleryCardSection = () => {
  return (
    <>
      <div className="w-full h-[862px] grid grid-cols-3  justify-between gap-6">
        <GalleryCard
          imageSrc="/images/Gallery/GalleryImage1.png"
          imgAlt="GalleryImage"
          title="Project title"
          description="UI, Art drection"
        ></GalleryCard>
        <GalleryCard
          imageSrc="/images/Gallery/GalleryImage2.png"
          imgAlt="GalleryImage"
          title="Project title"
          description="UI, Art drection"
        ></GalleryCard>
        <GalleryCard
          imageSrc="/images/Gallery/GalleryImage3.png"
          imgAlt="GalleryImage"
          title="Project title"
          description="UI, Art drection"
        ></GalleryCard>
        <GalleryCard
          imageSrc="/images/Gallery/GalleryImage4.png"
          imgAlt="GalleryImage"
          title="Project title"
          description="UI, Art drection"
        ></GalleryCard>
        <GalleryCard
          imageSrc="/images/Gallery/GalleryImage5.png"
          imgAlt="GalleryImage"
          title="Project title"
          description="UI, Art drection"
        ></GalleryCard>
        <GalleryCard
          imageSrc="/images/Gallery/GalleryImage6.png"
          imgAlt="GalleryImage"
          title="Project title"
          description="UI, Art drection"
        ></GalleryCard>
      </div>
    </>
  );
};
export default GalleryCardSection;
