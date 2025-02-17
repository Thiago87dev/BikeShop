interface BikeNameProps {
  name: string;
}
const BikeName = ({ name }: BikeNameProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-6 h-6 border-[1px] border-red-500">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default BikeName;
