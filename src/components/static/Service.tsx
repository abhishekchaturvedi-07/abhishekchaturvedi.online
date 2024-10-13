import { ServiceData } from "../../types/types.d";
import { useState } from "react";
import Overlay from "../layout/Overlay";
import HierarchicalTree from "../../data/heirarchies/hierarchical-tree-component";

const Service = (serviceData: ServiceData) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      <div
        className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-900 relative cursor-pointer"
        onClick={() => setIsOverlayVisible(true)}
      >
        <img
          className="w-2/3 h-auto self-center"
          src={serviceData.img}
          alt="transition"
        />
        <p className="text-xl font-bold">{serviceData.hl}</p>
        <p className="mt-3 text-lg">{serviceData.desc}</p>
      </div>

      <Overlay
        isVisible={isOverlayVisible}
        onClose={() => setIsOverlayVisible(false)}
      >
        <HierarchicalTree />
      </Overlay>
    </>
  );
};

export default Service;
