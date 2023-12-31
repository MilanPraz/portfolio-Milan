import Navlink from "./Navlink";

function MenuOverlay({ links }) {
  return (
    <ul className=" flex flex-col  py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Navlink path={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
