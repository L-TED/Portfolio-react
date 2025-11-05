import Image from "next/image";

const StudyCard = ({ src, title, desc, skills }) => {
  return (
    <div>
      <div className="flex flex-col justify-between text-center w-65 h-105 pt-6 pl-4 pr-4 pb-4 bg-stone-100 gap-2 rounded-xl shadow-2xl/40">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={src}
            alt=""
            width={220}
            height={1}
            className="rounded-lg object-cover"
          />
          <div className="text-lg font-bold">{title}</div>
          <div className="text-xs text-gray-700">{desc}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-1">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex text-[10px] pl-1 pr-1 border border-gray-400 rounded-3xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
