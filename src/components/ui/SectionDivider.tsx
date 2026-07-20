export default function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`wave-divider ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z"
        fill="rgba(6, 182, 212, 0.04)"
      />
    </svg>
  );
}