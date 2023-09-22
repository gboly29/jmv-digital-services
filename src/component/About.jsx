import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element  grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="aboutsvg" className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Music" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            beatae odit nostrum quisquam, perferendis amet cum eligendi dolor
            dolores officiis esse impedit. Quasi minima, nemo maxime tenetur vel
            numquam neque.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
