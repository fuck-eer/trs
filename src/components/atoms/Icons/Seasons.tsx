export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const Seasons = ({
  height,
  viewBox,
  width,
  strokeWidth,
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "41"}
      height={height ?? "40"}
      viewBox={viewBox ?? "0 0 41 40"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 25C23.2614 25 25.5 22.7614 25.5 20C25.5 17.2386 23.2614 15 20.5 15C17.7386 15 15.5 17.2386 15.5 20C15.5 22.7614 17.7386 25 20.5 25Z"
        stroke="#B6D9A1"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 13.3333V10M20.5 10V5M20.5 10L15.5 6.66667M20.5 10L25.5 6.66667M27.1667 20H30.5M30.5 20H35.5M30.5 20L33.8333 15M30.5 20L33.8333 25M20.5 26.6667V30M20.5 30V35M20.5 30L15.5 33.3333M20.5 30L25.5 33.3333M13.8333 20H10.5M10.5 20H5.5M10.5 20L7.16667 15M10.5 20L7.16667 25"
        stroke="#B6D9A1"
        stroke-width={strokeWidth ?? "3.33333"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Seasons;
