import { useContext } from "react";
import NavbarMenu from "./NavbarMenu";
import { RefContext } from "../context/refContext";
import GitHub from "../icons/GitHub";

function Navbar() {
  const refContext = useContext(RefContext);
  const { homeRef, scrollIntoView } = refContext || {};

  const homeClick = () => {
    if (scrollIntoView && homeRef) {
      scrollIntoView(homeRef);
    }
  };
  return (
    <div className="navbar fixed bg-white z-10 top-0">
      <div className="flex-1">
        <div className="btn btn-ghost text-xl" onClick={() => homeClick()}>
          Home
        </div>
      </div>
      <div className="flex-none flex gap-1">
        <a
          href="https://github.com/saharat-kosum"
          className="btn btn-sm btn-ghost btn-circle"
          target="_blank"
        >
          <GitHub />
        </a>
        <NavbarMenu />
      </div>
    </div>
  );
}

export default Navbar;
