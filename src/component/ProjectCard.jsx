const ProjectCard = ({ img, title, text }) => {
  return (
    <article className="bg-wite rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="object-cover rounded-t-lg h-64 w-full"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 max-w-md leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4"></div>
      </div>
    </article>
  );
};

export default ProjectCard;
