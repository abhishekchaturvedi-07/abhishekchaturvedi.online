import Summary from "../static/Summary";
import Timeline from "../static/Timeline";

const About = () => {
  return (
    <div id="About" className="flex flex-col bg-slate-800">
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
        loading="lazy"
      />
      <div className="flex items-center justify-center flex-grow text-slate-100">
        <div className="flex flex-row w-full">
          <div className="flex flex-col desktop:w-1/2 mobile:w-full mobile:p-4 desktop:p-20">
            <Summary />
          </div>
          <div className="flex-col w-1/2 pl-10 desktop:flex mobile:hidden">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
