import React from "react";
import riotgames from "../../public/riot-games-png.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-screen flex flex-row items-center justify-between mx-auto p-4 text-white font-mono">
        <a href="/" className="ml-3">
          <Image src={riotgames} height={80} width={80} alt="" />
        </a>
        <ul className="flex flex-row gap-7">
          <li>
            <Link href="agents">Agents</Link>
          </li>
          <li>
            <Link href="weapons">Weapons</Link>
          </li>
          <li>
            <Link href="maps">Maps</Link>
          </li>
        </ul>
        <div>
          <Link
            href="https://playvalorant.com/es-es/"
            className="text-black bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Play now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
