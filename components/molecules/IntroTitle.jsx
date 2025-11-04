import Text from "../atoms/Text";

const IntroTitle = () => {
  return (
    <div className="flex flex-col ">
      <Text
        style={"text-6xl font-extrabold whitespace-pre-wrap leading-23"}
        text={`Creating experiences\nthrough technology.`}
      />
      <Text
        style={"text-gray-600 mt-20"}
        text="“Keep your face towards the sunshine and shadows will fall behind you.”"
      />
    </div>
  );
};

export default IntroTitle;
