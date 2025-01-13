import Image from "next/image";
import React from "react";


export default function Home() {
  return (
    <body>
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
      test
      <Image
        src="/wave.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Painting of tidal wave"
      />
      <Image
        src="/dog.webp"
        width={1000}
        height={760}
        className="md:hidden"
        alt="Painting of tidal wave"
      />
    </body>
  );
}
