// Class Card component - Generated from Figma MCP
// Using Tailwind classes with inline font styles for Roboto

// Chevron down icon (8x8)
const ChevronDownIcon = ({ color = "currentColor" }) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1 2.5L4 5.5L7 2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Avatar component
const Avatar = ({ initials, className = "" }) => (
  <div className={`relative w-[20px] h-[20px] ${className}`}>
    <div className="absolute inset-0 bg-[#007fa5] rounded-full border-2 border-white" />
    <p
      className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {initials}
    </p>
  </div>
);

// Start Button Mini component
const StartButtonMini = () => (
  <button className="bg-white border border-[#4c7800] flex gap-[8px] items-center justify-center px-[8px] py-[2px] rounded-[4px]">
    <p
      className="text-[14px] font-medium leading-[20px] text-[#4c7800]"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      Start
    </p>
    <ChevronDownIcon color="#4c7800" />
  </button>
);

// Schedule info component
const ClassCardSchedule = ({ nextSession = "Tue, 2:20 pm" }) => (
  <div className="flex gap-[8px] items-center">
    <p className="text-[14px] leading-[20px] text-[#007fa5]" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <span className="font-normal">Next session: </span>
      <span className="font-medium">{nextSession}</span>
    </p>
    <ChevronDownIcon color="#005169" />
  </div>
);

// Avatar Group component
const AvatarGroup = ({ avatars = ["RW", "CE", "PT"] }) => (
  <div className="flex items-center">
    {avatars.map((initials, index) => (
      <Avatar
        key={index}
        initials={initials}
        className={index > 0 ? "-ml-[2px]" : ""}
      />
    ))}
  </div>
);

// Main Class Card component
export default function ClassCard({
  title = "World History 2B",
  nextSession = "Tue, 2:20 pm",
  avatars = ["RW", "CE", "PT"],
  colorBlock = "green"
}) {
  const colorBlockStyles = {
    green: "bg-[#96c560]",
    purple: "bg-[#b69ad2]",
    teal: "bg-[#007fa5]",
    orange: "bg-[#f79a3e]",
  };

  return (
    <div
      className="bg-white border border-[#d8dcde] flex flex-col items-center pb-[16px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[220px]"
      data-name="Class-cardV2"
    >
      {/* Color block at top */}
      <div className={`${colorBlockStyles[colorBlock] || colorBlockStyles.green} h-[24px] w-full rounded-tl-[8px] rounded-tr-[8px]`} />

      {/* Content area */}
      <div className="flex flex-col gap-[16px] items-start pt-[16px] px-[16px] w-full">
        {/* Header */}
        <div className="flex flex-col items-start w-full">
          <p
            className="text-[16px] font-bold leading-[24px] text-[#2f3941] truncate w-full"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            {title}
          </p>
          <ClassCardSchedule nextSession={nextSession} />
        </div>

        {/* Start button area */}
        <div className="flex items-center w-full">
          <StartButtonMini />
        </div>

        {/* Avatar area */}
        <div className="flex items-center h-[20px] w-full">
          <AvatarGroup avatars={avatars} />
        </div>
      </div>
    </div>
  );
}
