import ContactBtn from "../navigation/menu/elements/ContactBtn";
import Service from "../static/Service";

const Services = () => {
  return (
    <div
      id="Services"
      className="flex flex-col items-center min-h-full text-white bg-slate-800"
    >
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <p className="flex justify-center mt-8 mb-8 text-4xl font-bold text-white">
        Want to learn from the best?
      </p>
      <div className="flex justify-around flex-grow text-center desktop:flex-row mobile:flex-col mobile:items-center">
        <Service
          hl="History of Web"
          desc="Explore the evolution of web technologies, weighing pros and cons of each stage, from static to dynamic and modern web development."
          img="/icons/SPA_Icon.svg"
        />
        <Service
          hl="Best Architecture"
          desc="Designing and implementing scalable, secure, and efficient system architectures. Includes micro frontend, microservice, caching, messaging queues, and serverless functions hosted in cloud environments."
          img="/icons/API_Icon.svg"
        />
        <Service
          hl="System Design Concepts"
          desc="Applying system design patterns and principles to ensure scalability, reliability, and maintainability, including considerations for microservices architecture, event-driven design, and cloud-native infrastructure."
          img="/icons/SEO_Icon.svg"
        />
      </div>
      <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">
        Get in Touch!!!
      </p>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
};

export default Services;
