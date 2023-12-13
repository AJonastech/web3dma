import {
  ClientTestimonial,
  ProjectHero,
  FootView,
  ContactView,
  FinalResult,
  ServiceView,
} from "../components";
import ServiceOffered from "../components/ProjectRoute/service-offered/ServiceOffered";

function Project() {
  return (
    <div className="w-full h-screen overflow-x-hidden select-none">
    
      <ProjectHero />
      <ClientTestimonial />
      <ServiceOffered/>
      <FinalResult />
      <ContactView />
      <FootView />
    </div>
  );
}

export default Project;
