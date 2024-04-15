import { motion } from "framer-motion";
import Link from "next/link";
import Typing from "../static/Typing";
import SocialMedia from "../navigation/links/SocialMedia";
import Arrow from "../static/Arrow";

const variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: -50 },
};

function Hero() {
  return (
    <div className="flex flex-col items-center min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientRight to-gradientLeft">
      <div className="flex flex-1 w-full mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse">
        <div className="z-20 flex flex-col text-white pointer-events-none desktop:w-3/5 mobile:w-full mobile:text-center">
          <motion.div initial="visible" animate="hidden" variants={variants}>
            <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">
              Greetings, I&apos;m Abhishek
            </p>
            <p className="desktop:text-[2.5vw] mobile:text-[5vw]">
              a Passionate full stack Architect with a remarkable journey
              spanning around 15 years of dedicated experience in crafting
              exceptional user interfaces that blend aesthetics, functionality,
              and user-centric design, specializing in web applications with
              <Typing />
            </p>
            <div className="flex mobile:hidden mt-6 justify-start w-[17vw]">
              <SocialMedia size={200} />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col desktop:w-2/5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            className="self-center object-contain mobile:w-full mobile:max-w-xl animate-scalepulse"
            src="/images/ac-thumbnail.png"
            alt="Portrait"
          />
        </motion.div>
      </div>
      <div className="inset-0 z-10 flex items-end justify-center py-2 desktop:absolute desktop:bottom-10">
        <Link href={"/#About"} aria-label="About">
          <Arrow />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
