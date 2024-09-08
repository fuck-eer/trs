export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const Plus = ({
  fill,
  height,
  viewBox,
  width,
  strokeWidth,
  className,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "44"}
      height={height ?? "44"}
      viewBox={viewBox ?? "0 0 44 44"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 22H4M22 4V40"
        stroke={fill ?? "#0D1408"}
        stroke-width={strokeWidth ?? "7"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Plus;
