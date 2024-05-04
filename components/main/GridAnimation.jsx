import GridElement from "../sub/GridElement";

function GridAnimation() {
  return (
    <div className="  grid mt-10   md:px-8 h-[80vh] place-content-center">
      <h4 className=" text-bold  text-slate-200 text-sm tracking-wide mb-4  mt-10 bg-gradient-to-r rounded-e-3xl p-2 from-purple-700 to-red-500  w-fit">
        Click on a dot to see the Magic!
      </h4>
      <GridElement />
    </div>
  );
}

export default GridAnimation;
