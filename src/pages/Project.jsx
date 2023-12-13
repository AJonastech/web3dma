import {
  ClientTestimonial,
  ProjectHero,
  FootView,
  ContactView,
  FinalResult,
  ServiceView,
} from "../components";
function Project() {
  return (
    <div className="w-full h-screen overflow-x-hidden select-none">
    
      <ProjectHero />
      <ClientTestimonial />
      <ServiceView />
      <FinalResult />
      <ContactView />
      <FootView />
    </div>
  );
}

export default Project;
