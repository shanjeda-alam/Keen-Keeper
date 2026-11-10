"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

const initialEntries = [
  { id: 1, type: "text", friendName: "Sara Khan", title: "Text with Sara Khan", date: "2026-10-28T10:00:00.000Z" },
  { id: 2, type: "call", friendName: "Rahim Uddin", title: "Call with Rahim Uddin", date: "2026-10-25T10:00:00.000Z" },
  { id: 3, type: "video", friendName: "Nusrat Jahan", title: "Video with Nusrat Jahan", date: "2026-10-20T10:00:00.000Z" },
  { id: 4, type: "call", friendName: "Tanvir Ahmed", title: "Call with Tanvir Ahmed", date: "2026-10-15T10:00:00.000Z" },
];

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = (type, friendName) => {
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    const newEntry = {
      id: Date.now(),
      type, // "call" | "text" | "video"
      friendName,
      title: `${label} with ${friendName}`,
      date: new Date().toISOString(),
    };
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}