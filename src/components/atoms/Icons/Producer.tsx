export type IconProps = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  color?: string;
  strokeWidth?: string;
  className?: string;
};
const Producer = ({
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
      width={width ?? "41"}
      height={height ?? "40"}
      viewBox={viewBox ?? "0 0 41 40"}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.8333 18.333C33.8333 10.0488 27.1174 3.33301 18.8333 3.33301C10.5491 3.33301 3.83325 10.0488 3.83325 18.333C3.83325 26.6172 10.5491 33.333 18.8333 33.333"
        stroke="#B6D9A1"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.25 25C26.7317 25 25.5 26.435 25.5 28.205C25.5 31.4092 28.75 34.3217 30.5 35C32.25 34.3225 35.5 31.4083 35.5 28.205C35.5 26.435 34.2692 25 32.75 25C31.82 25 30.9975 25.5383 30.5 26.3617C30.0025 25.5383 29.18 25 28.25 25Z"
        stroke="#B6D9A1"
        stroke-width={strokeWidth ?? "3.33333"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8332 22.4993C19.9382 22.4993 20.998 22.0604 21.7794 21.279C22.5609 20.4976 22.9998 19.4378 22.9998 18.3327C22.9998 17.2276 22.5609 16.1678 21.7794 15.3864C20.998 14.605 19.9382 14.166 18.8332 14.166C17.7281 14.166 16.6683 14.605 15.8869 15.3864C15.1055 16.1678 14.6665 17.2276 14.6665 18.3327C14.6665 19.4378 15.1055 20.4976 15.8869 21.279C16.6683 22.0604 17.7281 22.4993 18.8332 22.4993Z"
        fill={fill ?? "#B6D9A1"}
        stroke="#B6D9A1"
        stroke-width="3.33333"
      />
    </svg>
  );
};

export default Producer;
