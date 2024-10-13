import { useState } from "react";
import ContactForm from "./Contact";

const ContactButton = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsContactVisible(true)}
        className="px-5 py-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
      >
        Contact Me
      </button>

      <ContactForm
        isVisible={isContactVisible}
        onClose={() => setIsContactVisible(false)}
      />
    </>
  );
};

export default ContactButton;
