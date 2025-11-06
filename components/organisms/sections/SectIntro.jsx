import IntroProfile from "../../molecules/IntroProfile";
import IntroTitle from "../../molecules/IntroTitle";

const SectIntro = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center w-full h-screen p-10 bg-stone-100"
    >
      <div className="flex ">
        <IntroProfile />
      </div>
      <div className="flex ">
        <IntroTitle />
      </div>
    </section>
  );
};

export default SectIntro;
