import React from "react";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import logoval from "../../public/val-logo-small.png";

const Footer = () => {
  return (
    <div className="p-10 bg-black text-white">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
        <Link href="https://twitter.com/VALORANTes">
          <ImTwitter className="text-3xl" />
        </Link>
        <Link href="https://www.youtube.com/PlayValorant">
          <AiFillInstagram className="text-3xl" />
        </Link>
        <Link href="https://www.instagram.com/esvalorant/">
          <AiFillYoutube className="text-3xl" />
        </Link>
        <Link href="https://www.facebook.com/PlayVALORANT/?brand_redir=106520110750605">
          <AiFillFacebook className="text-3xl" />
        </Link>
        <Link href="https://discord.com/invite/valorant">
          <BsDiscord className="text-3xl" />
        </Link>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <Image src={logoval} height={80} width={80} />
        <p className="mt-2">
          © 2023 Riot Games, Inc., Riot Games, VALORANT y cualquier logotipo<br/>
          relacionado son marcas comerciales o marcas registradas de Riot Games,
          Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
