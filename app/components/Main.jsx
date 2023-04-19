import React from "react";
import { ValorantLogo } from "./ValorantLogo";

const Main = () => {
  return (
    <div className="relative">
      <video
        width="100%"
        preload="true"
        muted
        loop
        playsInline={true}
        autoPlay={true}
        poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte299f23c6e55ebed/63bcad4899e03c1edced9b6f/VAL_Ep6_Homepage-CG-Still.jpg"
        data-testid="hero:video"
        src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4"
        type="video/mp4"
      />
      <p className="absolute bottom-40 top-0 left-0 right-0 flex items-center justify-center text-[#ece8e1]">
        A 5v5 character-based tactical shooter
      </p>
      <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center z-10">
        <ValorantLogo />
      </div>
    </div>
  );
};

export default Main;
