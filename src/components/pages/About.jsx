export default function About() {
  return (
    <div className="w-full h-screen flex flex-col justify-center px-16 bg-white">
      <h2 className="font-handwritten text-3xl text-gray-800 mb-6 border-b border-gray-200 pb-2">
        About Me
      </h2>
      <p className="font-handwritten text-lg text-gray-700 leading-relaxed max-w-lg">
        I'm Judit Otazu — a Machine Learning Engineer with a creative edge and a love for the sea.
        I build intelligent systems that bridge research and product, with a focus on Computer Vision
        and MLOps.
      </p>
      <p className="font-handwritten text-lg text-gray-700 leading-relaxed max-w-lg mt-4">
        I care about clean code, thoughtful design, and technology that makes a real difference.
      </p>
    </div>
  );
}
