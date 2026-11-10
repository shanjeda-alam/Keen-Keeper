import { FiPhoneCall, FiMessageSquare, FiVideo } from "react-icons/fi";

const actions = [
  { type: "call", label: "Call", icon: FiPhoneCall },
  { type: "text", label: "Text", icon: FiMessageSquare },
  { type: "video", label: "Video", icon: FiVideo },
];

const QuickCheckIn = ({ friend }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-medium text-[#244d3f]">Quick Check-In</h3>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {actions.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            className="bg-slate-50 border border-gray-200 rounded-md py-4 flex flex-col items-center gap-2 text-sm hover:bg-gray-100 transition"
          >
            <Icon size={22} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickCheckIn;