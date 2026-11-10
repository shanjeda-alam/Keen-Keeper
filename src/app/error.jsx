"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="text-center py-32 px-4">
      <h2 className="text-2xl font-bold text-red-500">Something went wrong</h2>
      <p className="mt-2 text-gray-500">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="btn mt-6 bg-[#244d3f] text-white border-none hover:bg-[#1b3b30]"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;