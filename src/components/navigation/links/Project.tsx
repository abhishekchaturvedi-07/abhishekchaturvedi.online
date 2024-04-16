import Tag from "../../static/Tag";

const Project = ({
  headline,
  image,
  text,
  tags,
  link,
}: {
  headline: string;
  image: string;
  text: string;
  tags: string[];
  link: string;
}) => {
  return (
    <a href={link} aria-label={text}>
      <div className="flex flex-col m-3 text-white transition-all scale-100 bg-black rounded-lg hover:scale-105 bg-opacity-20 aspect-square max-w-96 max-h-96">
        <div className="overflow-hidden rounded-t-lg w-fit h-fit">
          <img
            loading="lazy"
            className="object-contain w-full max-h-64h-full"
            alt={text}
            src={image}
          />
        </div>
        <div className="p-4">
          <div className="mb-4 text-xl font-medium">{headline}</div>
          <p>{text}</p>
          <ul className="flex flex-wrap mt-2" aria-label="Technologies used:">
            {tags.map((item, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <Tag title={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default Project;
