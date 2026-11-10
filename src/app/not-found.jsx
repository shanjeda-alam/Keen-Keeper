import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center py-32 px-4">
      <h1 className="text-7xl font-bold text-[#244d3f]">404</h1>
      <p className="mt-4 text-xl font-semibold">Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn mt-6 bg-[#244d3f] text-white border-none hover:bg-[#1b3b30]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;