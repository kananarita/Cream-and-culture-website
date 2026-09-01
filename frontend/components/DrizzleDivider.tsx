export default function DrizzleDivider({
  className = "",
  color = "#E3A23C",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
       viewBox="0 0 1200 40"
       className={`drizzle-divider w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 20 C 100 5, 200 35, 300 20 S 500 5, 600 20 S 800 35, 900 20 S 1100 5, 1200 20"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
