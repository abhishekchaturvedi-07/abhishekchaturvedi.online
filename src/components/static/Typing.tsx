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
        "Fault Tolerant",
        500,
        "Resiliant",
        500,
        "Scalabe",
        500,
        "Modular",
        500,
        "Human Readable Code",
        500,
        "utilizing Web Components",
        500,
        "with Next.js",
        500,
        "and Typescript",
        500,
        "and Tailwind/Bootstrap CSS Framework",
        500,
        "or Design System",
        500,
        "which includes React.js",
        500,
        "and Express.js",
        500,
        "experience in",
        500,
        "caching using REDIS",
        500,
        "Node based",
        500,
        "microservices communication",
        500,
        "using Apache KAFKA",
        500,
        "also with AEM and EDS",
        500,
        "Traditional / Headless / Hybrid",
        500,
        "deployement in AWS cloud",
        500,
        "or in GKE environment",
        500,
        "or in Azure system",
        500,
        "consuming AI api's",
        500,
        "with different LLM's",
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
