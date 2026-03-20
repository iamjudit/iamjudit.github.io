const experiences = [
  {
    role: "ML Engineer",
    company: "Veridas",
    period: "2023 – 2025",
    description: "Computer Vision, document anti-spoofing, model deployment at scale.",
  },
  {
    role: "M.Sc. Computer Engineering",
    company: "UPNA",
    period: "2021 – 2023",
    description: "Research focus on deep learning and multimodal models.",
  },
];

export default function Experience() {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-16 bg-white">
      <h2 className="font-handwritten text-3xl text-gray-800 mb-8 border-b border-gray-200 pb-2">
        Experience
      </h2>
      <ul className="space-y-7">
        {experiences.map(({ role, company, period, description }) => (
          <li key={role}>
            <div className="flex justify-between items-baseline">
              <span className="font-handwritten text-xl text-gray-800">{role}</span>
              <span className="font-handwritten text-sm text-gray-400">{period}</span>
            </div>
            <div className="font-handwritten text-base text-[#0a1f44] font-semibold">{company}</div>
            <p className="font-handwritten text-sm text-gray-600 mt-1">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
