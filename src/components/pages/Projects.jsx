const projects = [
  {
    name: "OceanLight AI",
    description: "Marine health monitoring using computer vision and satellite imagery.",
    tags: ["Python", "CV", "ML"],
  },
  {
    name: "Document Anti-Spoofing",
    description: "POC for Veridas — detecting forged documents with deep learning.",
    tags: ["PyTorch", "MLOps", "FastAPI"],
  },
];

export default function Projects() {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-16 bg-white">
      <h2 className="font-handwritten text-3xl text-gray-800 mb-8 border-b border-gray-200 pb-2">
        Projects
      </h2>
      <ul className="space-y-7">
        {projects.map(({ name, description, tags }) => (
          <li key={name}>
            <h3 className="font-handwritten text-xl text-gray-800">{name}</h3>
            <p className="font-handwritten text-sm text-gray-600 mt-1">{description}</p>
            <div className="flex gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-handwritten text-xs bg-[#0a1f44] text-white px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
