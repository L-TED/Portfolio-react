import Image from "next/image";
import Text from "@/components/atoms/Text";

const Loading = () => {
  return (
    <div className="w-screen h-screen fixed z-999 flex flex-col top-0 left-0 justify-center items-center gap-8 bg-white">
      <Image src={"/Gear.gif"} alt="" width={100} height={100} />
      <Text
        style={"text-3xl font-extrabold text-center"}
        text={`Page Now is Loading ...`}
      />
    </div>
  );
};
export default Loading;
