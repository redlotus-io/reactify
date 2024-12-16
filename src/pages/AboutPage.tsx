import { Link } from "react-router-dom";

export const AboutPage = () => (
  <div className="flex flex-col w-screen h-screen bg-slate-800">
    <div className="flex flex-col items-center justify-center w-full h-full">
      <p className="text-2xl font-bold text-white">About</p>
      <Link to="/">
        <p className="mt-6 text-lg font-bold text-white">Home</p>
      </Link>
    </div>
  </div>
);
