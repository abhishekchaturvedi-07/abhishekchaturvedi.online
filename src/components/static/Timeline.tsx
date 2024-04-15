import data from "../../data/dataWork";
import Tag from "../static/Tag";

// TODO: clean up code
const Timeline = () => {
  return (
    <div className="desktop:text-xl">
      {data.map((item, index) => (
        <div key={"W" + index} className="flex">
          <div>
            <div className="flex items-center justify-center text-white rounded-full desktop:w-20 mobile:mt-6 desktop:h-20 mobile:w-12 mobile:h-12 bg-slate-600">
              <div className="flex desktop:h-[72px] desktop:w-[72px] mobile:h-[45px] mobile:w-[45px] bg-slate-800 desktop:font-bold rounded-full justify-center items-center">
                {item.year.toString()}
              </div>
            </div>
            {index < data.length - 1 ? (
              <div className="h-full m-auto mobile:w-6 desktop:w-1 bg-slate-600"></div>
            ) : (
              <div className="h-16"></div>
            )}
          </div>
          <div className="flex flex-col justify-start mt-5 text-white h-max desktop:px-6 mobile:px-4">
            <div className="font-bold">
              {item.title + " @ "}
              <span className="font-bold text-teal-400">{item.company}</span>
            </div>
            <div>{item.tasks}</div>
            <ul className="flex flex-wrap mt-1" aria-label="Technologies used:">
              {item.tags.map((tag, index) => (
                <li key={"L" + index} className="mr-1.5 mt-2">
                  <Tag title={tag} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
