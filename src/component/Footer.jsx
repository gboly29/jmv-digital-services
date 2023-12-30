import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-blue-300">
      <section className="bg-blue-300 py-16  grid place-items-center lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <article className="grid place-items-center">
          <h1 className="font-bold text-xl capitalize ">services</h1>

          <p>Airtime Top-up</p>
          <p>Internet Data Subscription</p>
          <p>Cable TV Subscription</p>
          <p>Electricity Bill Payment</p>
          <p>NECO, WAEC and Jamb Pin Codes</p>
        </article>
        <article className="grid place-items-center">
          <h1 className="font-bold text-xl capitalize mt-0">Links</h1>

          <a href="#pricing">View Pricing</a>

          <a href="#blog">Blog</a>
        </article>
        <div className="grid place-items-center">
          <h1 className="font-bold capitalize text-xl pb-2">contact</h1>

          <p className="flex">
            <FiPhoneCall className="h-5 w-8 text-slate-500 hover:text-black duration-300" />{" "}
            07065628041
          </p>
          <p className="flex">
            <FaWhatsapp className="h-5 w-8 text-slate-500 hover:text-black duration-300" />{" "}
            07065628041
          </p>
          <div className="flex gap-8 mt-8">
            <FaFacebook className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            <FaInstagram className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </div>
        </div>
      </section>
      <p className="capitalize pb-8 grid place-items-center">
        &copy; {year} JMV digital-service LTD. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
