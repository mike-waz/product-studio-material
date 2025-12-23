// Round 4: Direct Figma MCP output with Tailwind
// Using the generated code from Figma more directly

// Placeholder image (Figma's localhost images won't persist)
const imgMultimediaV2 = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop";

// Icon SVGs - fetched from Figma's localhost and converted to inline
const TabsIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor">
    <rect x="0.5" y="0.5" width="15" height="13" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <line x1="0" y1="4" x2="16" y2="4" stroke="currentColor" strokeWidth="1"/>
    <rect x="1" y="1" width="4" height="2" rx="0.5" fill="currentColor"/>
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <ellipse cx="8" cy="8" rx="6" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="8" cy="8" r="2" fill="currentColor"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" fill="currentColor"/>
  </svg>
);

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="4" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
  </svg>
);

// Direct from Figma MCP with minimal modifications
export default function StudentCardTailwind() {
  return (
    <div
      className="bg-white border border-solid border-[#b5430f] flex flex-col items-start relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[274px]"
      data-name="student-cardV2"
    >
      <div className="flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full">
        {/* Screenshot area */}
        <div className="border-b border-[#f5f5f6] border-solid flex flex-col items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] w-full h-full"
            src={imgMultimediaV2}
          />
          <div className="flex h-[180px] items-center justify-center relative shrink-0 w-full" />
        </div>

        {/* Details section */}
        <div className="bg-white flex flex-col gap-[4px] items-start pb-[8px] pl-[16px] pr-[8px] pt-0 relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
          {/* Name and URL */}
          <div className="flex flex-col items-start relative shrink-0 w-full">
            <div className="flex items-center relative shrink-0 w-full">
              <p className="flex-1 h-[20px] font-bold text-[14px] leading-[20px] text-[#2f3941] truncate" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Name goes here
              </p>
            </div>
            <div className="flex items-center relative shrink-0 w-full">
              <p className="flex-1 h-[20px] font-normal text-[12px] leading-[16px] text-[#2f3941] truncate" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Domain goes here
              </p>
            </div>
          </div>

          {/* Status area */}
          <div className="flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="flex-1 flex items-center justify-between min-h-px min-w-px relative shrink-0">
              <div className="flex-1 flex gap-[8px] items-center min-h-px min-w-px relative shrink-0">
                {/* Tabs badge - Teal */}
                <div className="bg-[#007fa5] flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[10px] shrink-0">
                  <div className="h-[14px] relative shrink-0 w-[16px] text-white">
                    <TabsIcon />
                  </div>
                  <p className="font-medium text-[12px] leading-[16px] text-white text-center whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    11
                  </p>
                </div>

                {/* Completed badge - Green */}
                <div className="bg-[#4c7800] flex items-center px-[6px] py-[2px] relative rounded-[10px] shrink-0">
                  <div className="relative shrink-0 w-[16px] h-[16px] text-white">
                    <CheckmarkIcon />
                  </div>
                </div>

                {/* OffTask badge - Gold/Orange */}
                <div className="bg-[#b5430f] flex items-center px-[6px] py-[2px] relative rounded-[10px] shrink-0">
                  <div className="relative shrink-0 w-[16px] h-[16px] text-white">
                    <EyeIcon />
                  </div>
                </div>

                {/* AI badge - Purple */}
                <div className="bg-[#5c3584] flex items-center px-[6px] py-[2px] relative rounded-[10px] shrink-0">
                  <div className="relative shrink-0 w-[16px] h-[16px] text-white">
                    <SparkleIcon />
                  </div>
                </div>

                {/* Collapsed badges +1 */}
                <div className="bg-white border border-[#eaebec] border-solid flex gap-[8px] items-center justify-center px-[8px] py-0 relative rounded-[24px] shrink-0">
                  <p className="font-medium text-[14px] leading-[20px] text-[#2f3941] whitespace-nowrap" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    +1
                  </p>
                </div>
              </div>
            </div>

            {/* More button */}
            <div className="flex items-center relative shrink-0">
              <div className="flex gap-0 items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
                <div className="relative shrink-0 w-[16px] h-[16px] text-[#007fa5]">
                  <MoreIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
