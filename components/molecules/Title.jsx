import Text from "../atoms/Text";
import { Footprints } from "lucide-react";

const Title = () => {
  return (
    <div className="flex gap-1.5 justify-center items-center">
      <Footprints size={30} />
      <Text style="text-xl font-bold" text="TED" />
    </div>
  );
};

export default Title;
