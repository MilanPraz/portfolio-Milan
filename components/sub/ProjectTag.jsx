function ProjectTag({ handleTabChange, active, children }) {
  const buttonClass = active
    ? "border-2 border-purple-600 text-white"
    : "text-myText border-2 border-myText";
  return (
    <button
      onClick={handleTabChange}
      className={` rounded-full  px-4 text-xl py-2 cursor-pointer ${buttonClass} `}
    >
      {children}
    </button>
  );
}

export default ProjectTag;
