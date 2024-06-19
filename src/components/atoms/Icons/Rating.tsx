export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const Rating = ({
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
        d="M17.1667 19.9997H20.5001C21.3841 19.9997 22.232 19.6485 22.8571 19.0234C23.4822 18.3982 23.8334 17.5504 23.8334 16.6663C23.8334 15.7823 23.4822 14.9344 22.8571 14.3093C22.232 13.6842 21.3841 13.333 20.5001 13.333H17.1667V26.6663M23.8334 26.6663L18.8334 19.9997"
        stroke="#B6D9A1"
        stroke-width={strokeWidth ?? "3.33333"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 5C32.5 5 35.5 8 35.5 20C35.5 32 32.5 35 20.5 35C8.5 35 5.5 32 5.5 20C5.5 8 8.5 5 20.5 5Z"
        stroke="#B6D9A1"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Rating;
