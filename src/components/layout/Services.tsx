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
          hl="End-to-End Application Delivery Solutions"
          desc="Includes the entire software lifecycle, from discussions, conception & development to deployment, monitoring, and maintenance for optimal performance."
          img="/icons/SPA_Icon.svg"
        />
        <Service
          hl="Highly Scalable & Cost Effective Solutions"
          desc="In a cloud environment, highly scalable & cost-effective solutions utilize auto-scaling & pay-as-you-go models to efficiently manage resources & mainly expenses."
          img="/icons/API_Icon.svg"
        />
        <Service
          hl="Real Time Monitoring Dashboards"
          desc="Real-time monitoring dashboards continuously track user activities, portal performance, and issues, facilitating rapid response and optimization for an uninterrupted user journey."
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
