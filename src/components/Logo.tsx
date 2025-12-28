import { FC, SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'w-8 h-8', ...props }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="20" cy="20" r="18" stroke="#39FF14" strokeWidth="4" />
      <path
        d="M20 38C10.059 38 2 29.941 2 20"
        stroke="#39FF14"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="0.1 4"
      />
      <path
        d="M24 15V25"
        stroke="#39FF14"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 15V25"
        stroke="#39FF14"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 20L24 15"
        stroke="#39FF14"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 25L24 20"
        stroke="#39FF14"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;