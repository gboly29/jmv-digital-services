const SectionTitle = ({ text }) => {
  return (
    <div className="border-b-2 border-orange-300 pb-5">
      <h2 className="text-3xl text-blue-500 font-medium tracking-wider capitalize">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
