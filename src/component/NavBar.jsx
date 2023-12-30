import { FaBars } from "react-icons/fa";
import { links } from "../data";
import logo from "../assets/logo.jpg";

const NavBar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="bg-white-900 -mb-4 ">
      <div className="align-element py-4 my- grid grid-cols-2  sm:gap-x-16 sm:item-center sm:py-8 ">
        <div>
          <img
            className="rounded-lg"
            width="80rem"
            height="80rem"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="hidden md:flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        <div className="grid col-start-7 md:hidden">
          <button type="button">
            <FaBars
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-slate-500 text-orange-400 text-4xl duration-300 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
