const SkillsCard = ({ icon, text, title }) => {
  return (
    <article className="grid place-items-center">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500 max-w-sm">{text}</p>
    </article>
  );
};

export default SkillsCard;
