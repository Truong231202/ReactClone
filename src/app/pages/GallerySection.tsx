import Title from "@/app/component/Title";
import GalleryCardSection from "@/app/components/GallerySection/GalleryCardSection";

const GallerySection = () => {
  return (
    <>
      <div className="h-[1030px] w-full px-6 py-[42px] flex flex-col items-center gap-[42px]">
        <Title title="Latest work"></Title>
        <GalleryCardSection></GalleryCardSection>
      </div>
    </>
  );
};
export default GallerySection;
