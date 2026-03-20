const skills = {
  "Machine Learning": ["Python", "PyTorch", "Pandas", "Computer Vision", "MMLLMs", "MLOps"],
  "Web & Backend": ["React", "Tailwind CSS", "FastAPI", "Git"],
};

export default function Skills() {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-16 bg-white">
      <h2 className="font-handwritten text-3xl text-gray-800 mb-8 border-b border-gray-200 pb-2">
        Skills
      </h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-7">
          <h3 className="font-handwritten text-base text-[#0a1f44] font-semibold mb-3">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="font-handwritten text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
