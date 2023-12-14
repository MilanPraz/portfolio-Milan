function TabButton({ active, handleTabChange, children }) {
  const buttonClass = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE] ";

  return (
    <button onClick={handleTabChange}>
      <p
        className={` mr-3 font-semibold hover:text-white text-myText ${buttonClass}`}
      >
        {children}
      </p>
    </button>
  );
}

export default TabButton;
