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
        Services
      </p>
      <div className="flex justify-around flex-grow text-center desktop:flex-row mobile:flex-col mobile:items-center">
        <Service
          hl="Single Page Applications"
          desc="Development of responsive web apps such as portfolios, landingpages and dashboards"
          img="/icons/SPA_Icon.svg"
        />
        <Service
          hl="API Integration"
          desc="Seamless integration into your solution for dynamic content delivery"
          img="/icons/API_Icon.svg"
        />
        <Service
          hl="SEO Optimization"
          desc="Enhancing visibility and rankings of your web application"
          img="/icons/SEO_Icon.svg"
        />
      </div>
      <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">
        You have a project? Get in Touch
      </p>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
};

export default Services;
