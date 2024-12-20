import HeaderSection from "@/app/pages/HeaderSection";
import Nav from "@/app/pages/Nav";
import LogoBar from "@/app/pages/LogoBar";
import Image from "next/image";
import SkillsSection from "@/app/pages/SkillsSection";
import GallerySection from "@/app/pages/GallerySection";
import TesmotionalSectionPage from "@/app/pages/TesmotionalSectionPage";
import ContactPage from "@/app/pages/ContactPage";
import ContactForm from "@/app/components/ContactSection/ContactForm";
import ContentContactSection from "@/app/components/ContactSection/ContentContactSection";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <HeaderSection></HeaderSection>
      <LogoBar></LogoBar>
      <SkillsSection></SkillsSection>
      <GallerySection></GallerySection>
      <TesmotionalSectionPage></TesmotionalSectionPage>
      <ContactPage></ContactPage>
    </>
  );
}
