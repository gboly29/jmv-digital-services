import { nanoid } from "nanoid";
import {
  FaTree,
  FaDatabase,
  FaMountain,
  FaLightbulb,
  FaShoppingBasket,
} from "react-icons/fa";

export const links = [
  {
    id: nanoid(),
    href: "/",
    text: "home",
  },
  { id: nanoid(), href: "Hero", text: "about" },
  { id: nanoid(), href: "Pricing", text: "pricing" },
  { id: nanoid(), href: "#support", text: "support" },
  { id: nanoid(), href: "#blog", text: "Blog" },
];

export const services = [
  {
    id: nanoid(),
    title: "AIRTIME TOP-UP",
    icon: <FaTree className="h-16 w-16 text-orange-400" />,
    text: "Recharge your phone instantly with our hassle-free airtime top-up service. Stay connected and in touch with friends and family effortlessly, anytime, anywhere.",
  },
  {
    id: nanoid(),
    title: "INTERNET DATA",
    icon: <FaDatabase className="h-16 w-16 text-orange-400" />,
    text: "Stay connected seamlessly with our affordable and fast internet data bundles. Browse, stream, and connect with ease, ensuring you are always in control of your online experience.",
  },
  {
    id: nanoid(),
    title: "CABLE SUBSCRIPTION",
    icon: <FaMountain className="h-16 w-16 text-orange-400" />,
    text: "Elevate your entertainment with our cable subscription service. Enjoy a diverse range of channels and never miss your favorite shows-subscribe today for uninterrupted entertainment.",
  },
  {
    id: nanoid(),
    title: "ELECTRICITY PAYMENT",
    icon: <FaLightbulb className="h-16 w-16 text-orange-400" />,
    text: "Simplify your life with our convenient electricity bill payment platform. Pay your bills seamlessly and ensure uninterrupted power supply, so you can focus on what matters the most.",
  },
  {
    id: nanoid(),
    title: "EXAM PIN",
    icon: <FaShoppingBasket className="h-16 w-16 text-orange-400" />,
    text: "Empower your educational journey with our swift and reliable exam pins service. Get instant access to WAEC, NECO, JAMB, and UTME pins. Take the next step towards success with us by your side.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "fast service delivery",
    text: "All our services are fully automated and delivered at the fastest speed.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "secured transaction",
    text: "We are always protecting your information that is why we have put in place a very secured platform.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",

    title: "support mechanism",
    text: "We have the best support mechanism in place to provide accurate solutions to any problems customers are facing.",
  },
];
