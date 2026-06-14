/**
 * Brand SVG icons for freelance platforms not available in Lucide.
 * These are used across hero, footer, and contact sections.
 */

// Fiverr logo mark: green rounded square with "fi" monogram
// This is the icon/logo mark (not the wordmark)
export function FiverrIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#1DBF73" />
      <g fill="white">
        {/* Letter f */}
        <path d="M7.8 17.2V11H5.9V9.4h1.9V7.7c0-1.5.8-2.4 2.3-2.4h2V7h-1.4c-.6 0-.9.3-.9.9v1.5h2.3V11H9.8v6.2H7.8z" />
        {/* Letter i dot */}
        <circle cx="14.8" cy="9.3" r="1.15" />
        {/* Letter i stem */}
        <rect x="14" y="11.2" width="1.6" height="6" rx="0.35" />
      </g>
    </svg>
  );
}

// Freelancer logo: the origami bird icon
export function FreelancerIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="#29B2FE"
    >
      <path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z" />
    </svg>
  );
}
