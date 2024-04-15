import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially

        "Secure",
        500,
        "Performant",
        500,
        "Scalabe",
        500,
        "Modular",
        500,
        "Human Readable Code",
        500,
        "with Next.js",
        500,
        "and Typescript",
        500,
        "and Tailwind CSS",
        500,
        "which includes React.js",
        500,
        "and Express.js",
        500,
        "also with AEM",
        500,
        "deployement in AWS cloud",
        500,
        "or in GKE environment",
        500,
        "or in Azure system",
        500,
        "consuming open AI",
        500,
        "using Animations.js",
        500,
        "also making Real - Time Data Dashboards",
        500,
        "and Personalization",
        500,
        "with Adobe Analytics",
        500,
        "and Adobe Target",
        500,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: "5px",
        fontSize: "1em",
        textAlign: "left",
        color: "#84ffff",
        fontWeight: "bold",
        display: "inline-block",
        width: "80.7%",
      }}
      repeat={1}
    />
  );
};

export default Typing;
