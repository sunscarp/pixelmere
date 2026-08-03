type Cell = { x: number; y: number; accent?: boolean };

const cells: Cell[] = [
  { x: 0, y: 0 },
  { x: 8, y: 0, accent: true },
  { x: 16, y: 0 },
  { x: 0, y: 8 },
  { x: 8, y: 8 },
  { x: 16, y: 8, accent: true },
  { x: 0, y: 16, accent: true },
  { x: 8, y: 16 },
  { x: 16, y: 16 },
];

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {cells.map((cell, index) => (
          <rect
            key={index}
            x={cell.x}
            y={cell.y}
            width="6"
            height="6"
            fill={cell.accent ? "var(--color-teal)" : "currentColor"}
          />
        ))}
      </svg>
      <span className="text-xl font-medium tracking-tight">pixelmere</span>
    </span>
  );
}
