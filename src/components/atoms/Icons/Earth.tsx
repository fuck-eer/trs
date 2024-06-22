export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const Earth = ({ fill, height, viewBox, width, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={width ?? "18"}
      height={height ?? "18"}
      viewBox={viewBox ?? "0 0 18 18"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM8.1 16.137C4.545 15.696 1.8 12.672 1.8 9C1.8 8.442 1.872 7.911 1.989 7.389L6.3 11.7V12.6C6.3 13.59 7.11 14.4 8.1 14.4V16.137ZM14.31 13.851C14.076 13.122 13.41 12.6 12.6 12.6H11.7V9.9C11.7 9.405 11.295 9 10.8 9H5.4V7.2H7.2C7.695 7.2 8.1 6.795 8.1 6.3V4.5H9.9C10.89 4.5 11.7 3.69 11.7 2.7V2.331C14.337 3.402 16.2 5.985 16.2 9C16.2 10.872 15.48 12.573 14.31 13.851Z"
        fill={fill ?? "#B6D9A1"}
      />
    </svg>
  );
};

export default Earth;
