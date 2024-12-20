import Title from "@/app/component/Title";
import TestimonialCardSection from "@/app/components/TestimonialSection/TestimonialCardSection";

const TesmotionalSectionPage: React.FC = () => {
  return (
    <>
      <div className="w-full max-h-[852px] px-6 py-[42px] flex flex-col items-center gap-[42px]">
        <Title title="Testimonial"></Title>
        <TestimonialCardSection></TestimonialCardSection>
      </div>
    </>
  );
};
export default TesmotionalSectionPage;
