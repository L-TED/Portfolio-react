import Footer from "../organisms/Footer";
import Nav from "../organisms/Nav";
import SectIntro from "../organisms/sections/SectIntro";
import SectEmpty from "../organisms/sections/SectEmpty";
import SectProject from "../organisms/sections/SectProject";
import SectExp from "../organisms/sections/SectExp";
import SectContact from "../organisms/sections/SectContact";

const Template = () => {
  return (
    <div>
      <Nav />
      <SectIntro />
      <SectEmpty style={"w-full h-[40vh] bg-stone-100"} />
      <SectProject />
      <SectEmpty style={"w-full h-[70vh] bg-stone-200"} />
      <SectExp />
      <SectEmpty style={"w-full h-[40vh] bg-stone-300"} />
      <SectContact />
      <Footer />
    </div>
  );
};
export default Template;
