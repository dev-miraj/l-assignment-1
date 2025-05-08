import feature1 from '../assets/features/feature-1.png';
import feature2 from '../assets/features/feature-2.png';
import ServiceCard from './ServiceCard';

function Service() {
  const services = [
    {
      title: 'Work with tools you already use',
      description:
        'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
      features: [
        'Continuous integration and deployment',
        'Development workflow',
        'Knowledge management',
      ],
      image: feature1,
      imagePosition: 'right',
    },
    {
      title: "We invest in the world's potential",
      description:
        'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
      features: [
        'Dynamic reports and dashboards',
        'Templates for everyone',
        'Development workflow',
        'Limitless business automation',
        'Knowledge management',
      ],
      image: feature2,
      imagePosition: 'left',
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Service;