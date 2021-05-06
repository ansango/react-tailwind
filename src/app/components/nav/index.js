import { useState } from "react";
import {
  IconOpen,
  IconClose,
  MobileLinks,
  DesktopLinks,
  HomeLink,
} from "./BlocksNav";
const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" py-3 sm:py-5 md:py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <HomeLink title={props.title} />
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"></div>
          <div>
            <div className="hidden sm:flex">
              <DesktopLinks />
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <IconOpen /> : <IconClose />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? <MobileLinks /> : ""}
    </nav>
  );
};

export default Nav;
