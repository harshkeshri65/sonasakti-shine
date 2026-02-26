import React from "react";

const StickyContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-700 text-white flex justify-around items-center py-3 z-50 md:hidden">
      <a
        href="tel:9931570543"
        className="font-semibold"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/917779986245"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold"
      >
        💬 WhatsApp
      </a>
    </div>
  );
};

export default StickyContactBar;
