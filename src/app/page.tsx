import HomeSection from "../components/sections/Home";
import ProfilSection from "../components/sections/Profil";
import SkillsSection from "../components/sections/Skills";
import ContactSection from "../components/sections/Contact";
import FormationSection from "../components/sections/Formation";

/*import SkillsSection from "../components/sections/Skills";
import PortfolioSection from "../components/sections/Portfolio";
import ContactSection from "../components/sections/Contact";
*/

export default function Page() {
  return (
    <div>
      <HomeSection />
      <ProfilSection />
      <SkillsSection />
      <FormationSection />
      <ContactSection />
       
    </div>
  );
}
