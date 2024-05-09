import { useContext } from "react";
import ThreeLines from "../icons/ThreeLines";
import { RefContext } from "../context/refContext";

const menuItems = [
  { label: "About", key: "about" },
  { label: "Projects", key: "projects" },
  { label: "Contact", key: "contact" },
];

const MenuItem = ({ label, onclick }: { label: string; onclick: Function }) => (
  <li className="btn btn-sm btn-ghost" onClick={() => onclick()}>
    {label}
  </li>
);

function NavbarMenu() {
  const refContext = useContext(RefContext);
  const { aboutRef, projectRef, contactRef, scrollIntoView } = refContext || {};
  const menuClick = (key: string) => {
    if (aboutRef && projectRef && contactRef && scrollIntoView) {
      const ref =
        key === "about"
          ? aboutRef
          : key === "projects"
          ? projectRef
          : contactRef;
      scrollIntoView(ref);
    }
  };

  return (
    <>
      <div className="dropdown sm:hidden dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <ThreeLines />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.key}
              label={item.label}
              onclick={() => menuClick(item.key)}
            />
          ))}
        </ul>
      </div>

      <ul className="hidden sm:flex gap-1 font-medium">
        {menuItems.map((item) => (
          <MenuItem
            key={item.key}
            label={item.label}
            onclick={() => menuClick(item.key)}
          />
        ))}
      </ul>
    </>
  );
}

export default NavbarMenu;
