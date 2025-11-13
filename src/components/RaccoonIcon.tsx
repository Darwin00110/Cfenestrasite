export function RaccoonIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wrench */}
      <g transform="rotate(-25 50 50)">
        <path
          d="M 65 70 L 68 67 L 75 74 L 78 77 L 75 80 L 72 77 L 65 70 Z"
          fill="#94a3b8"
          stroke="#64748b"
          strokeWidth="1"
        />
        <rect
          x="63"
          y="55"
          width="4"
          height="18"
          rx="1"
          fill="#94a3b8"
          stroke="#64748b"
          strokeWidth="1"
        />
        <path
          d="M 61 55 L 69 55 L 69 50 C 69 48 67 46 65 46 C 63 46 61 48 61 50 Z"
          fill="#94a3b8"
          stroke="#64748b"
          strokeWidth="1"
        />
      </g>

      {/* Raccoon body */}
      <ellipse cx="50" cy="55" rx="22" ry="20" fill="#4b5563" />
      
      {/* Raccoon head */}
      <circle cx="50" cy="35" r="18" fill="#6b7280" />
      
      {/* Ears */}
      <ellipse cx="38" cy="22" rx="6" ry="8" fill="#4b5563" />
      <ellipse cx="62" cy="22" rx="6" ry="8" fill="#4b5563" />
      <ellipse cx="38" cy="23" rx="3" ry="4" fill="#9ca3af" />
      <ellipse cx="62" cy="23" rx="3" ry="4" fill="#9ca3af" />
      
      {/* Face mask pattern */}
      <ellipse cx="42" cy="35" rx="8" ry="7" fill="#1f2937" />
      <ellipse cx="58" cy="35" rx="8" ry="7" fill="#1f2937" />
      
      {/* Eyes */}
      <circle cx="42" cy="34" r="4" fill="#f3f4f6" />
      <circle cx="58" cy="34" r="4" fill="#f3f4f6" />
      <circle cx="43" cy="34" r="2.5" fill="#1f2937" />
      <circle cx="59" cy="34" r="2.5" fill="#1f2937" />
      <circle cx="44" cy="33" r="1" fill="#fff" />
      <circle cx="60" cy="33" r="1" fill="#fff" />
      
      {/* Nose */}
      <ellipse cx="50" cy="40" rx="3" ry="2.5" fill="#1f2937" />
      
      {/* Mouth */}
      <path
        d="M 50 40 Q 48 43 46 42"
        stroke="#1f2937"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 50 40 Q 52 43 54 42"
        stroke="#1f2937"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Tail stripes */}
      <g transform="translate(70, 52) rotate(20)">
        <ellipse cx="0" cy="0" rx="5" ry="12" fill="#6b7280" />
        <ellipse cx="0" cy="-6" rx="4" ry="3" fill="#1f2937" />
        <ellipse cx="0" cy="2" rx="4" ry="3" fill="#1f2937" />
      </g>
      
      {/* Arms */}
      <ellipse cx="32" cy="50" rx="5" ry="10" fill="#6b7280" />
      <ellipse cx="68" cy="50" rx="5" ry="10" fill="#6b7280" />
      
      {/* Paws */}
      <circle cx="32" cy="58" r="4" fill="#4b5563" />
      <circle cx="68" cy="58" r="4" fill="#4b5563" />
      
      {/* Belly */}
      <ellipse cx="50" cy="58" rx="12" ry="10" fill="#9ca3af" />
    </svg>
  );
}
