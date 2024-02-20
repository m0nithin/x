import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
}

const ProjectCard = ({ src, title, line1, line2, line3, line4 }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <h2 className="mt-2 text-gray-300">{line1}</h2>
        <h2 className="mt-2 text-gray-300">{line2}</h2>
        <h2 className="mt-2 text-gray-300">{line3}</h2>
        <h2 className="mt-2 text-gray-300">{line4}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
