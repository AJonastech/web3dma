import {
  ClientTestimonial,
  ProjectHero,
  FootView,
  ContactView,
  FinalResult,
} from "../components";
import ServiceOffered from "../components/project-route/service-offered/ServiceOffered";

function Project() {

  return (
    <div className="w-full  h-full overflow-x-hidden select-none">
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
