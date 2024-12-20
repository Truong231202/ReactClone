import ContactForm from "@/app/components/ContactSection/ContactForm";
import ContactInfo from "@/app/components/ContactSection/ContactInfo";

const ContentContactSection: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between gap-[142px]">
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
      </div>
    </>
  );
};
export default ContentContactSection;
