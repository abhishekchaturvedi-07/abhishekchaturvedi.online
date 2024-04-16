import { ServiceData } from "../../types/types.d";

const Service = (serviceData: ServiceData) => {
  return (
    <div className="flex flex-col min-h-full p-8 m-4 transition-colors rounded-md desktop:w-1/3 mobile:w-3/4 hover:bg-slate-700">
      <img
        loading="lazy"
        className="self-center w-2/3 h-auto"
        src={serviceData.img}
        alt="transition"
      />
      <p className="text-xl font-bold">{serviceData.hl}</p>
      <p className="mt-3 text-lg">{serviceData.desc}</p>
    </div>
  );
};

export default Service;
