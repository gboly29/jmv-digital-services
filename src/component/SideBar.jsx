import { links } from "../data";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`${isOpen ? "hidden" : "w-72"} absolute right-0 top-12
       h-50 grid place-items-end pr-8 pb-10 gap-x-2 gap-y-16 bg-orange-300 rounded-lg duration-300 md:hidden`}
      >
        <FaTimes
          onClick={() => setIsOpen(!isOpen)}
          className="text-6xl text-blue-400 cursor-pointer pt-5 hover:text-red-700"
        />
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className="capitalize text-xl tracking-wide bg-blue-300 rounded-xl px-5 py-2 -my-5 hover:text-blue-400 hover:animate-pulse duration-300"
            >
              {text}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
