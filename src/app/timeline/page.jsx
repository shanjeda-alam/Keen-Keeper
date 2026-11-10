"use client";
import { useState } from "react";
import Image from "next/image";
import { useTimeline } from "../context/TimelineContext";

const typeInfo = {
  call: { label: "Call", icon: "/assets/call.png" },
  text: { label: "Text", icon: "/assets/text.png" },
  video: { label: "Video", icon: "/assets/video.png" },
};

const TimelinePage = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900">Timeline</h1>

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="select select-sm bg-white border-gray-200 text-gray-500 mt-4 w-48"
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {/* List */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 py-16">
          No interactions found.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {filtered.map((entry) => {
            const info = typeInfo[entry.type];
            return (
              <div
                key={entry.id}
                className="bg-white rounded-md shadow-sm px-4 py-3 flex items-center gap-4"
              >
                <Image
                  src={info.icon}
                  alt={info.label}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain shrink-0"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold text-[#244d3f]">
                      {info.label}
                    </span>
                    <span className="text-gray-500">
                      {" "}with {entry.friendName}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(entry.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;