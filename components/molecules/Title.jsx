import Text from "../atoms/Text";
import { Footprints } from "lucide-react";

const Title = () => {
  return (
    <div className="flex">
      <Footprints />
      <Text style="font-bold" text="TED" />
    </div>
  );
};

export default Title;
