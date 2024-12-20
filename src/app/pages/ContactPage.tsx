import ContentContactSection from "@/app/components/ContactSection/ContentContactSection";
import TitleContact from "@/app/components/ContactSection/TitleContact";

const ContactPage = () => {
  return (
    <>
      <div className="w-full px-6 py-[42.86px] flex flex-col items-start gap-6 self-stretch">
        <TitleContact></TitleContact>
        <ContentContactSection></ContentContactSection>
      </div>
    </>
  );
};
export default ContactPage;
