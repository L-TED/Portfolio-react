import Text from "../../atoms/Text";
import ProjectCard from "../../molecules/ProjectCard";
import { data } from "../../../projectsData";

const SectProject = () => {
  return (
    <section id="project" className="w-full h-screen bg-stone-200">
      <div className="flex flex-col items-center p-10 gap-5">
        <Text
          style={"text-4xl font-bold mt-10 mb-10"}
          text={"Featured Projects"}
        />
        <div className="grid grid-cols-3 gap-14">
          {data.map((v) => {
            return (
              <ProjectCard
                key={v.id}
                src={v.src}
                title={v.title}
                desc={v.desc}
                skills={v.skills}
                detail={v.detail}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectProject;
