import heroImg from "../assets/hero.svg";
import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-24 bg-blue-300">
      <div className="align-element py-8 bg-blue-300 grid md:grid-cols-2 sm:grid-cols-1 items-center gap-8">
        <article className="bg-blue-300">
          <h1 className="text-5xl font-bold text-blue-600 tracking-wider sm:text-2xl">
            <span className="pr-2">JMV</span>
            <span className="text-orange-400">Digital-Services</span>
          </h1>
          <p className="mt-4 sm:text-1xl sm:max-w-xs text-slate-700 capitalize tracking-wide">
            Experience lightning-fast, reliable internet services that
            seamlessly connect you to the digital world.
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaInstagram className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaFacebook className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
          <div className="flex flex-row mt-12 ml-28">
            <a
              href="/signup"
              className="bg-orange-400 p-4 rounded-xl px-6 m-2 font-bold capitalize cursor-pointer"
            >
              sign up
            </a>
            <a
              href="/login"
              className="bg-orange-400 p-4 rounded-xl px-6 m-2 font-bold capitalize cursor-pointer"
            >
              login
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero image" className="h-80 lg:-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
