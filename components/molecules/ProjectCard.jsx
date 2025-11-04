import Image from "next/image";

const ProjectCard = ({ src, title, desc, skills }) => {
  return (
    <div>
      <div className="flex flex-col items-center text-center w-60 h-105 pt-6 pl-3 pr-3 bg-stone-100 gap-2 rounded-xl shadow-2xl/30">
        <Image
          src={src}
          alt=""
          width={180}
          height={1}
          className="rounded-lg object-cover"
        />
        <div className="text-xl font-bold">{title}</div>
        <div className="text-sm text-gray-700">{desc}</div>
        <div className="text-xs p-8 rounded-lg">{skills}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
