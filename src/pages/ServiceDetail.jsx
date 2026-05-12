import SEO from '../components/utils/SEO';
import { useParams } from 'react-router-dom';
import ServiceTemplate from './service/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Look up the specific documentation from our data file
  const currentService = servicesData[serviceId];

  // If the user types a wrong URL, we can default to API Integration or a 404
  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xs font-bold tracking-widest text-slate-400">
        SERVICE DOCUMENTATION NOT FOUND
      </div>
    );
  }
  return (
    <>
      <SEO
        title={currentService.title}
        description={currentService.heroDescription}
        path={`/service/${serviceId}`}
      />
      <ServiceTemplate data={currentService} />
    </>
  );
}