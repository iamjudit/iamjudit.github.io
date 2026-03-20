const links = [
  { label: "Email", value: "iamjudit@proton.me", href: "mailto:iamjudit@proton.me" },
  { label: "GitHub", value: "github.com/iamjudit", href: "https://github.com/iamjudit" },
];

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-16 bg-white">
      <h2 className="font-handwritten text-3xl text-gray-800 mb-8 border-b border-gray-200 pb-2">
        Get in Touch
      </h2>
      <ul className="space-y-4">
        {links.map(({ label, value, href }) => (
          <li key={label} className="font-handwritten text-lg">
            <span className="text-gray-400">{label}: </span>
            <a
              href={href}
              className="text-[#0a1f44] underline underline-offset-4 hover:opacity-70 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
      <p className="font-handwritten text-sm text-gray-400 mt-12">~ End of notebook ~</p>
    </div>
  );
}
