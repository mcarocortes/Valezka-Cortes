type LogoProps = {
  size?: number
}

export function Logo({ size = 36 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="50" height="50" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 7h5M57 57h5" stroke="currentColor" strokeWidth="1.2" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="500"
        letterSpacing="1"
      >
        VC
      </text>
    </svg>
  )
}
