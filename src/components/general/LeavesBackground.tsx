import Image from "next/image";

const LeavesBackground = () => {
  return (
    <div className="absolute z-[0] top-0 left-0 w-full h-full">
      <img
        src={"/bg-leaves.png"}
        className="w-full h-full object-cover"
        alt="Marco de hojas"
      />
    </div>
  );
};

export default LeavesBackground;
