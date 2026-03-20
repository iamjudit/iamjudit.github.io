import notebookImage from "../../assets/notebook_cover.jpeg";
import "../../index.css"; // por si defines la fuente global ahí

export default function Cover() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#0a1f44]">
      <img
        src={notebookImage}
        alt="Notebook Cover"
        className="w-[90%] max-w-[800px] h-auto object-contain"
      />
      <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] text-center font-handwritten">
        <h1 className="text-4xl text-gray-800">Judit Otazu</h1>
        <div className="w-16 h-1 bg-gray-800 mx-auto mt-2 mb-4"></div>
        <p className="text-lg text-gray-600">Software Engineer</p>
        <p className="text-lg text-gray-600 mt-2">Full Stack Developer</p>
        <p className="text-lg text-gray-600 mt-2">Frontend Specialist</p>
        <p className="text-lg text-gray-600 mt-2">Backend Enthusiast</p>
        <p className="text-lg text-gray-600 mt-2">Tech Lover</p>
        <p className="text-lg text-gray-600 mt-2">Creative Coder</p>
        <p className="text-lg text-gray-600 mt-1">Portfolio</p>
      </div>
    </div>
  );
}
