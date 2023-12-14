import { Link } from "react-scroll";

function Navlink({ path, title }) {
  return (
    <Link
      to={path}
      spy={true}
      smooth={true}
      offset={50}
      duration={800}
      delay={300}
      className="block cursor-pointer py-2 px-3 text-[#ADB7BE] sm:text-xl  rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}

export default Navlink;
