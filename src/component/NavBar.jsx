import { FaBars } from "react-icons/fa";
import { links } from "../data";
import { useState } from "react";

const NavBar = () => {
  const [showLink, setshowLink] = useState(false);

  const displayLinks = () => {
    setshowLink(!showLink);
  };
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 grid grid-cols-2  sm:gap-x-16 sm:item-center sm:py-8 ">
        <h2 className="text-3xl font-bold">
          Gboly<span className="text-emerald-600">WebDev</span>
        </h2>
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
        {showLink && (
          <div className="grid grid-cols-2 col-start-3 gap-x-3 bg-slate-100 rounded md:hidden">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 md:hidden"
                >
                  {text}
                </a>
              );
            })}
          </div>
        )}
        <div className="grid col-start-7 md:hidden">
          <button type="button" onClick={displayLinks}>
            <FaBars className="hover:text-slate-500 duration-300 cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
