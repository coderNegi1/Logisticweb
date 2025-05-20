// src/components/MarqueeText.jsx
import React from "react";

const MarqueeText = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-yellow-100 py-3">
      <p className="inline-block animate-marquee text-red-600 font-bold text-lg px-4">
        INTERNATIONAL COURIER DHL, UPS, FEDEX, ARAMEX, DPD, OWN NETWORK, INTERNATIONAL BAGGAGE SERVICES, INTERNATIONAL RELOCATION, FCL &nbsp; 🚚✈️📦
      </p>
    </div>
  );
};

export default MarqueeText;
