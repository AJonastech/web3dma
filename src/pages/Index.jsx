
import {
  HeroView,
  AboutView,
  FootView,
  ServiceView,
  PortfolioView,
  StackView,
  ContactView
} from "../components";


function Index() {

  return (
    <main className="w-full h-full overflow-hidden select-none">
      <HeroView />
      <AboutView />
      <ServiceView />
      <PortfolioView />
      <StackView/>
      <ContactView/>
      <FootView />
      </main>
  );
}

export default Index;
