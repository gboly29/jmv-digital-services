import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const Pricing = () => {
  return (
    <section className="bg-blue-100 py-20 " id="about">
      <div className="align-element bg-blue-100 grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="aboutsvg" className="w-full h-64" />
        <article>
          <SectionTitle text="pricing" />
          <p className="text-slate-600 mt-8 text-lg pb-8 leading-loose max-w-md">
            Explore our affordable pricing options tailored to fit your needs.
            At JMV digital-service, we believe in providing quality services
            without breaking the bank. Discover competitive rates for airtime,
            data bundles, cable TV subscriptions, and more. Get the best value
            for your money with us.
          </p>
          <a
            href=""
            className="bg-orange-400 p-4 rounded-xl px-8 font-bold capitalize cursor-pointer"
          >
            pricing
          </a>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
