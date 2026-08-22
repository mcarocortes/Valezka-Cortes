import vcLogo from '../assets/vc.png'

type LogoProps = {
  size?: number
}

export function Logo({ size = 36 }: LogoProps) {
  return (
    <img
      className="brand-logo"
      src={vcLogo}
      alt="VC"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  )
}
