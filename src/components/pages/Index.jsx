export default function Index() {
  const entries = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-16">
      <h2 className="font-handwritten text-3xl text-gray-800 mb-8 border-b border-gray-300 pb-2 w-full max-w-sm text-center">
        Table of Contents
      </h2>
      <ul className="font-handwritten text-xl text-gray-600 space-y-4 w-full max-w-sm">
        {entries.map((item, i) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-gray-400 w-5">{i + 1}.</span>
            <span>{item}</span>
            <span className="flex-1 border-b border-dotted border-gray-300 mx-2" />
            <span className="text-gray-400">{i + 2}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
