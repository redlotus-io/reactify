import { Link } from "react-router-dom";

export const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center">
    <p className="mb-3 text-2xl">404 - Not Found</p>
    <Link to="/">
      <p className="text-lg">Back to Home</p>
    </Link>
  </div>
);
