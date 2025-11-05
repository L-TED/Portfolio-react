import Text from "@/components/atoms/Text";
import StudyCard from "@/components/molecules/StudyCard";
import { progress } from "@/projectsData";

const SectExp = () => {
  return (
    <section id="growth" className="w-full h-screen bg-stone-300 ">
      <div className="flex flex-col items-center p-10 gap-5">
        <Text style={"text-4xl font-bold mt-10"} text={"Learning & Growth"} />
        <Text
          style={"text-lg text-gray-500 font-bold"}
          text={"My journey through new technologies and knowledge domains."}
        />

        <div className="grid grid-cols-3 gap-14 mt-6">
          {progress.map((v) => {
            return (
              <StudyCard
                key={v.id}
                src={v.src}
                title={v.title}
                desc={v.desc}
                skills={v.skills}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectExp;
