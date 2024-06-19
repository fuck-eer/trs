export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const GroupCollection = ({
  color,
  height,
  viewBox,
  width,
  strokeWidth,
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "88"}
      height={height ?? "88"}
      viewBox={viewBox ?? "0 0 88 88"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_89_171)">
        <rect
          x="4.5"
          y="0.5"
          width="79"
          height="79"
          rx="39.5"
          fill="#B6D9A1"
          stroke={color ?? "#0D1408"}
        />
        <path
          d="M62 40H26M44 22V58"
          stroke="#0D1408"
          stroke-width={strokeWidth ?? "7"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_89_171"
          x="0"
          y="0"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_89_171"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_89_171"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GroupCollection;
