import Image from "next/image";

const SocialMedia = ({ size }: { size: number }) => {
  return (
    <div
      className="flex justify-center gap-2 pb-4"
      style={{ pointerEvents: "auto" }}
    >
      <a
        className="p-4 transition-all scale-100 bg-black bg-opacity-50 rounded-full hover:scale-110"
        href="https://www.linkedin.com/in/abhishekchaturvedi07/"
        target="_blank"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="Icon"
          width={size}
          height={size}
        />
      </a>
      <a
        className="p-4 transition-all scale-100 bg-black bg-opacity-50 rounded-full hover:scale-110"
        href="https://github.com/abhishekchaturvedi-07"
        target="_blank"
      >
        <Image src="/icons/github.svg" alt="Icon" width={size} height={size} />
      </a>
      <a
        className="p-4 transition-all scale-100 bg-black bg-opacity-50 rounded-full hover:scale-110"
        href="https://instagram.com/abhishekchaturvedi07"
        target="_blank"
      >
        <Image
          src="/icons/instagram.svg"
          alt="Icon"
          width={size}
          height={size}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
