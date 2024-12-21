import HeaderSection from "@/app/components/HeaderSection";
import Nav from "@/app/components/Nav";
import LogoBar from "@/app/components/LogoBar";
import SkillsSection from "@/app/components/SkillsSection";
import GallerySection from "@/app/components/GallerySection";
import TesmotionalSectionPage from "@/app/components/TesmotionalSectionPage";
import ContactPage from "@/app/components/ContactPage";

export default function Home() {
  return (
    <div className="bg-white">
      <Nav></Nav>
      <HeaderSection></HeaderSection>
      <LogoBar></LogoBar>
      <SkillsSection></SkillsSection>
      <GallerySection></GallerySection>
      <TesmotionalSectionPage></TesmotionalSectionPage>
      <ContactPage></ContactPage>
    </div>
  );
}
