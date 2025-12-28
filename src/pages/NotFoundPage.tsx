import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-6xl font-bold text-soursz-neon mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      <p className="mb-6 text-white/60 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
                   bg-soursz-neon text-black hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
